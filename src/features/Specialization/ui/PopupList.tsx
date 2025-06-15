type Props = {
  children: React.ReactNode
}

export default function PopupList({ children }: Props) {
  return <div className='flex flex-col gap-[14px]'>{children}</div>
}
