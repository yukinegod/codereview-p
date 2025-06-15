'use client'

import { useState } from 'react'

export default function Switch() {
  const [isOn, setIsOn] = useState(false)

  return (
    <button
      type='button'
      onClick={() => setIsOn((prev) => !prev)}
      className={`w-[36px] h-[22px] flex items-center px-[2px] border-2 rounded-[18px] flex-shrink-0 transition-colors duration-300 cursor-pointer ${
        isOn ? ' border-black' : 'bg-transparent border-[#D4D5D7]'
      }`}
      style={{
        backgroundColor: isOn ? '#FFFFFF' : '#FFFFFF',
      }}
    >
      <div
        className={`w-[14px] h-[14px] rounded-full transition-transform duration-300 ${
          isOn ? 'translate-x-[14px] bg-black' : 'translate-x-0 bg-[#D4D5D7]'
        }`}
      />
    </button>
  )
}
