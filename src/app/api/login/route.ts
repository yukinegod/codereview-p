import { API_URL } from '@/shared/config/config'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json()

    const form = new URLSearchParams()
    form.append('username', username)
    form.append('password', password)
    form.append('grant_type', '')
    form.append('scope', '')
    form.append('client_id', '')
    form.append('client_secret', '')

    const backendRes = await fetch(`${API_URL}/auth/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: form,
    })

    const data = await backendRes.json()

    if (!backendRes.ok) {
      return NextResponse.json(
        { error: data?.detail || 'Login failed' },
        { status: backendRes.status }
      )
    }

    return NextResponse.json(data)
  } catch (e) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
