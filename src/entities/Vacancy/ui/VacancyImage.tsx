'use client'

import { useEffect, useState } from 'react'

type Props = {
  logoLink: string
}

export default function VacancyImage({ logoLink }: Props) {
  const [isValid, setIsValid] = useState(true)

  useEffect(() => {
    const img = new Image()
    img.src = logoLink
    img.onload = () => setIsValid(true)
    img.onerror = () => setIsValid(false)
  }, [logoLink])

  return (
    <div
      className='w-[42px] h-[42px] rounded-[8px] bg-cyan-500'
      style={{
        backgroundImage: isValid ? `url(${logoLink})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  )
}
