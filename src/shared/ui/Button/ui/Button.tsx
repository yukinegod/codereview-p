'use client'

import clsx from 'clsx'
import styles from './styles.module.css'

type Props = {
  text: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
}

export default function Button({
  text,
  onClick,
  type = 'button',
  className,
  disabled = false,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'flex items-center justify-center py-[14px] px-[20px] w-[360px] rounded-[18px] text-white text-[18px] font-medium leading-[22px] tracking-[-0.5px] transition-all duration-200 cursor-pointer',
        styles.button,
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {text}
    </button>
  )
}
