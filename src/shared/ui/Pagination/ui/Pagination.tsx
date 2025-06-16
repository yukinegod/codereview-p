import Link from 'next/link'
import dots from '../../../../../public/dots.svg'
import styles from './styles.module.css'
import Image from 'next/image'

type Props = {
  currentPage: number
  totalPages: number
  basePath: string
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: Props) {
  const getVisiblePages = () => {
    const pages: (number | string)[] = []
    const windowSize = 5

    if (currentPage <= 3) {
      for (let i = 1; i <= Math.min(windowSize, totalPages); i++) {
        pages.push(i)
      }
      if (totalPages > windowSize) {
        pages.push('...')
        pages.push(totalPages)
      }
    } else if (currentPage < totalPages - 2) {
      pages.push(currentPage - 2)
      pages.push(currentPage - 1)
      pages.push(currentPage)
      pages.push(currentPage + 1)
      pages.push(currentPage + 2)
      pages.push('...')
      pages.push(totalPages)
    } else {
      pages.push(currentPage - 2)
      pages.push(currentPage - 1)
      pages.push(currentPage)
      if (currentPage + 1 <= totalPages) pages.push(currentPage + 1)
      if (currentPage + 2 <= totalPages) pages.push(currentPage + 2)
    }

    return pages
  }

  const visiblePages = getVisiblePages()

  return (
    <div
      className={`flex gap-[3px] w-fit h-[40px] mt-5 bg-white select-none ${styles.pagination}`}
    >
      {visiblePages.map((page, index) =>
        typeof page === 'number' ? (
          <Link
            key={page}
            href={`${basePath}?page=${page}`}
            className={`flex items-center justify-center text-[18px] font-medium w-[40px] h-[40px] ${
              page === currentPage ? styles.activePage : ''
            }`}
          >
            {page}
          </Link>
        ) : (
          <div
            key={page}
            className='flex items-center justify-center w-[40px] h-[40px]'
          >
            <Image
              width={15}
              height={15}
              src={dots}
              alt='dots icon'
              className='flex items-center justify-center'
            />
          </div>
        )
      )}
    </div>
  )
}
