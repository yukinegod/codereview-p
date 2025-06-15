import useHoverStore from '../model/useHoverStore'
import styles from './styles.module.css'

type Props = {
  title: string
  id: number
}

export default function VacancyTitle({ title, id }: Props) {
  const { hoveredVacancyId } = useHoverStore()
  return (
    <p
      className={`${
        hoveredVacancyId === id ? 'text-[#0560c9]' : 'text-[#232325]'
      } text-[22px] font-semibold line-clamp-2 text-ellipsis overflow-hidden cursor-pointer ${
        styles.title
      }`}
    >
      {title}
    </p>
  )
}
