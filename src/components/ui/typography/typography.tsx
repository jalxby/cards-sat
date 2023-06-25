import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

type TypographyProps<T> = {
  as?: T
  variant?:
    | 'large'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'overline'
    | 'link'
    | 'link2'
  children?: ReactNode
  className?: string
}
export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & ComponentPropsWithoutRef<T>
) => {
  const { variant = 'primary', fullWidth, as: Component = 'p', className, ...rest } = props

  return (
    <div>
      <Component className={`${s[variant]}`} {...rest}></Component>
    </div>
  )
}
