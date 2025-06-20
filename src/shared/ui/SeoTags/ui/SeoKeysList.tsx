'use client'

import {
  INTERVIEWS_SEO_TAGS,
  QUESTION_SEO_TAGS,
  VACANCIES_SEO_TAGS,
  VACANCY_SEO_TAGS,
} from '@/shared/config/config'
import useCategoryStore from '@/entities/Category/model/useCategoryStore'
import SeoKeyItem from './SeoKeyItem'

type Props = {
  type: 'vacancies' | 'interviews' | 'vacancy' | 'question'
}

export default function SeoKeysList({ type }: Props) {
  const { activeCategory } = useCategoryStore()

  const getTags = () => {
    switch (type) {
      case 'vacancies':
        return (
          <>
            {VACANCIES_SEO_TAGS.default.map((tag) => (
              <SeoKeyItem key={`vac-${tag.id}`} label={tag.label} />
            ))}
            {VACANCIES_SEO_TAGS.withFilter
              .filter((tag) => tag.filter === activeCategory)
              .map((tag) => (
                <SeoKeyItem key={`vac-filter-${tag.id}`} label={tag.label} />
              ))}
          </>
        )
      case 'interviews':
        return (
          <>
            {INTERVIEWS_SEO_TAGS.default.map((tag) => (
              <SeoKeyItem key={`int-${tag.id}`} label={tag.label} />
            ))}
            {INTERVIEWS_SEO_TAGS.withFilter
              .filter((tag) => tag.filter === activeCategory)
              .map((tag) => (
                <SeoKeyItem key={`int-filter-${tag.id}`} label={tag.label} />
              ))}
          </>
        )
      case 'vacancy':
        return (
          <>
            {VACANCY_SEO_TAGS.default.map((tag) => (
              <SeoKeyItem key={`vacancy-${tag.id}`} label={tag.label} />
            ))}
            {VACANCY_SEO_TAGS.withFilter
              .filter((tag) => tag.filter === activeCategory)
              .map((tag) => (
                <SeoKeyItem
                  key={`vacancy-filter-${tag.id}`}
                  label={tag.label}
                />
              ))}
          </>
        )
      case 'question':
        return (
          <>
            {QUESTION_SEO_TAGS.default.map((tag) => (
              <SeoKeyItem key={`question-${tag.id}`} label={tag.label} />
            ))}
          </>
        )
      default:
        return null
    }
  }

  return (
    <section
      aria-label='SEO ключевые слова'
      className='flex items-center justify-center flex-wrap gap-2 w-full mt-[60px] max-w-[1020px] mb-5'
      itemScope
      itemType='https://schema.org/ItemList'
    >
      {getTags()}
    </section>
  )
}
