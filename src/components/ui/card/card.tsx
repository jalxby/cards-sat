import { ComponentPropsWithoutRef, ReactNode } from 'react'

import s from './card.module.scss'

type CardProps = {
  children: ReactNode
} & ComponentPropsWithoutRef<'div'>

export const Card = ({ className, children, ...rest }: CardProps) => {
  return (
    <div className={`${s.card} ${className}`} {...rest}>
      {children}
    </div>
  )
}
