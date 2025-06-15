import styles from './styles.module.css'

type Props = {
  text: string
}

export default function Item({ text }: Props) {
  return (
    <div className='flex font-medium'>
      <span className='text-[#232325] mx-3'>•</span>
      <span
        className={`text-[#232325] text-[18px] font-medium flex-1 ${styles.listItem}`}
      >
        {text}
      </span>
    </div>
  )
}
