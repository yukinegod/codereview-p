import DropdownItem from './DropdownItem'
import styles from './styles.module.css'

type Props = {
  filterKey: string
  options: any
}

export default function DropdownList({ filterKey, options }: Props) {
  return (
    <div
      className={`flex flex-col items-end absolute top-[60px] left-0 bg-white pt-[10px] pb-[5px] w-[224px] overflow-hidden scroll-auto rounded-[14px] z-30 ${styles.dropdownList}`}
    >
      {options.map((text: string) => (
        <DropdownItem key={text} text={text} filterKey={filterKey} />
      ))}
    </div>
  )
}
