import { API_URL } from '@/shared/config/config'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization')
  if (!authHeader) {
    return NextResponse.json({ error: 'No token provided' }, { status: 401 })
  }

  const userRes = await fetch(`${API_URL}/auth/users/me`, {
    headers: { Authorization: authHeader },
  })

  const data = await userRes.json()

  if (!userRes.ok) {
    return NextResponse.json(
      { error: data?.detail || 'Failed to fetch user' },
      { status: userRes.status }
    )
  }

  return NextResponse.json(data)
}
