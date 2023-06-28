import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import { clsx } from 'clsx'

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
    | 'link1'
    | 'link2'
    | 'error1'
    | 'error2'
  children?: ReactNode
  className?: string
  color?: 'primary' | 'secondary' | 'error' | 'inherit'
}
export const Typography = <T extends ElementType = 'p'>(
  props: TypographyProps<T> & ComponentPropsWithoutRef<T>
) => {
  const {
    variant = 'div',
    unselectable,
    as: Component = 'span',
    className,
    color = 'inherit',
    ...rest
  } = props
  const cName = clsx(
    `${s[variant]} ${s[color]} ${className}`,
    unselectable === 'on' && s.unselectable
  )

  return <Component className={cName} {...rest}></Component>
}
