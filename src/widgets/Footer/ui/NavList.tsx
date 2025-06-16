type Props = {
  children: React.ReactNode
}

export default function NavList({ children }: Props) {
  return <ul className='flex flex-col gap-3 list-none p-0 m-0'>{children}</ul>
}
