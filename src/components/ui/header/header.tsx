import { ComponentPropsWithoutRef, FC } from 'react'

import { clsx } from 'clsx'
import { Link } from 'react-router-dom'

import s from './header.module.scss'

import { Logo } from '@/assets/icons/Logo.tsx'
import { Button } from '@/components'

type HeaderProps = { isAuth: boolean } & ComponentPropsWithoutRef<'header'>
export const Header: FC<HeaderProps> = ({ className, isAuth, ...rest }) => {
  const sNames = {
    header: clsx(className, s.header),
    container: clsx(s.headerContainer, 'container'),
  }

  return (
    <header className={sNames.header} {...rest}>
      <div className={sNames.container}>
        <Link to={'/'}>
          <Logo width="156" height="36" aria-label="logo" />
        </Link>

        {isAuth ? 'Avatar' : <Button>Sign In</Button>}
      </div>
    </header>
  )
}
