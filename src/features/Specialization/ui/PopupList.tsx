type Props = {
  children: React.ReactNode
}

export default function PopupList({ children }: Props) {
  return (
    <ul
      role='menu'
      aria-label='Список пунктов меню'
      className='flex flex-col gap-[14px]'
    >
      {children}
    </ul>
  )
}
