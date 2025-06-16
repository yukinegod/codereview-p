import Card from './Card'
import { CATEGORIES } from '../config/config'
import { CardType } from '../types/types'

export default function CardList() {
  return (
    <section aria-label='Категории поиска'>
      <ul className='grid grid-cols-4 gap-[8px] mt-[20px]'>
        {CATEGORIES.map((category, index: number) => (
          <li key={category.id} role='article'>
            <Card
              type={category.type as CardType}
              title={category.title}
              description={category.description}
              index={index}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
