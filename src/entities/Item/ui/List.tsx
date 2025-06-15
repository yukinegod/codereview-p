import Item from './Item'
import styles from './styles.module.css'

type Props = {
  title: string
  items: string[]
}

export default function List({ title, items }: Props) {
  return (
    <div className='w-[660px] mt-[30px]'>
      <h2
        className={`text-[#232325] font-bold text-[18px] leading-[24px] tracking-[-0.5px] mb-[20px] ${styles.subtitle}`}
      >
        {title}
      </h2>
      <div className='flex flex-col gap-[13px]'>
        {items.map((item: string, index: number) => (
          <Item text={item} key={index} />
        ))}
      </div>
    </div>
  )
}
