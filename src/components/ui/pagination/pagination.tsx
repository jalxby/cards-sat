import { FC, KeyboardEvent } from 'react'

import { clsx } from 'clsx'

import s from './pagination.module.scss'
import { usePagination } from './usePagination'

import { ChevronLeft, ChevronRight } from '@/assets/icons'
import { Typography } from '@/components'

export type PaginationPropsType = {
  currentPage: number
  totalCount: number
  pageSize: number
  siblingCount: number
  className?: string
  onPageChange: (page: number) => void
}
export const Pagination: FC<PaginationPropsType> = props => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props
  const DOTS = '\u2026'
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
    DOTS,
  })

  const lastPage = paginationRange[paginationRange.length - 1]
  const disabledLeft = currentPage === 1
  const disableRight = currentPage === lastPage

  const leftTabIndex = disabledLeft ? -1 : 0
  const rightTabIndex = disableRight ? -1 : 0
  const cNames = {
    container: clsx(s.container),
    pageItem: clsx(s.pageContainer),
    leftArrow: clsx(s.pageContainer, disabledLeft && s.disabled),
    rightArrow: clsx(s.pageContainer, disableRight && s.disabled),
    dots: clsx(s.dots),
  }

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    !disableRight && onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    !disabledLeft && onPageChange(currentPage - 1)
  }
  const onKeyDownSpaceLeft = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Space') {
      onPrevious()
    }
  }
  const onKeyDownSpaceRight = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.code === 'Space') {
      onNext()
    }
  }
  const pages = paginationRange.map((pageNumber, index) => {
    const activePage = clsx(s.pageContainer, currentPage === pageNumber && s.active)
    const setActivePage = () => {
      onPageChange(+pageNumber)
    }
    const onKeyDownSpace = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.code === 'Space') {
        onPageChange(+pageNumber)
      }
    }

    return pageNumber === DOTS ? (
      <div key={index} className={cNames.dots}>
        <Typography variant={'body2'}>{DOTS}</Typography>
      </div>
    ) : (
      <div
        tabIndex={0}
        key={index}
        onKeyDown={onKeyDownSpace}
        className={activePage}
        onClick={setActivePage}
      >
        <Typography variant={'body2'}>{pageNumber}</Typography>
      </div>
    )
  })

  return (
    <div className={cNames.container}>
      <div
        tabIndex={leftTabIndex}
        className={cNames.leftArrow}
        onKeyDown={onKeyDownSpaceLeft}
        onClick={onPrevious}
      >
        <ChevronLeft />
      </div>
      {pages}
      <div
        tabIndex={rightTabIndex}
        className={cNames.rightArrow}
        onKeyDown={onKeyDownSpaceRight}
        onClick={onNext}
      >
        <ChevronRight />
      </div>
    </div>
  )
}
