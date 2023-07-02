import { FC } from 'react'

import s from './pagination.module.scss'
import { usePagination } from './usePagination'

import { ChevronLeft, ChevronRight } from '@/assets/icons'

type PropsType = {
  currentPage: number
  totalCount: number
  pageSize: number
  siblingCount: number
  className?: string
  onPageChange: (page: number) => void
}
export const Pagination: FC<PropsType> = props => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props
  const DOTS = '\u2026'
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
    DOTS,
  })

  // If there are less than 2 times in pagination range we
  // shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  let lastPage = paginationRange[paginationRange.length - 1]

  return (
    <ul className={s.container}>
      {/* Left navigation arrow */}
      <li className={s.leftArrow} onClick={onPrevious}>
        <ChevronLeft />
      </li>
      {paginationRange.map(pageNumber => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <div key={pageNumber} className={s.pageContainer}>
              <li className="pagination-item dots">{DOTS}</li>
            </div>
          )
        }

        // Render our Page Pills
        return (
          <div key={pageNumber} className={s.pageContainer}>
            <li onClick={() => onPageChange(+pageNumber)}>{pageNumber}</li>
          </div>
        )
      })}
      {/*  Right Navigation arrow */}
      <li
        className={s.rightArrow}
        // className={classnames('pagination-item', {
        //   disabled: currentPage === lastPage,
        // })}
        onClick={onNext}
      >
        <ChevronRight />
      </li>
    </ul>
  )
}
