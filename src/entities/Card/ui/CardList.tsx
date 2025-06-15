import Card from './Card'
import { CATEGORIES } from '../config/config'
import { CardType } from '../types/types'

export default function CardList() {
  return (
    <div className='grid grid-cols-4 gap-[8px] mt-[20px]'>
      {CATEGORIES.map((category, index: number) => (
        <Card
          type={category.type as CardType}
          title={category.title}
          description={category.description}
          index={index}
          key={category.id}
        />
      ))}
    </div>
  )
}
