import { ComponentPropsWithoutRef, FC } from 'react'

import { clsx } from 'clsx'
import { NavLink } from 'react-router-dom'

import s from './header.module.scss'

import { Logo } from '@/assets/icons/Logo.tsx'
import { Avatar, Button, Dropdown } from '@/components'

export type UserInfoType = {
  name: string
  email: string
  avatar: string
}
type HeaderProps = {
  isAuth: boolean
  user: UserInfoType
} & ComponentPropsWithoutRef<'header'>
export const Header: FC<HeaderProps> = ({ className, user, isAuth, ...rest }) => {
  const sNames = {
    header: clsx(className, s.header),
    container: clsx(s.headerContainer, 'container'),
  }

  return (
    <header className={sNames.header} {...rest}>
      <div className={sNames.container}>
        <NavLink className={s.link} to={'/'}>
          <Logo width="156" height="36" aria-label="logo" />
        </NavLink>
        {isAuth ? (
          <Dropdown
            user={user}
            trigger={<Avatar size={45} name={user?.name} src={user.avatar} />}
          />
        ) : (
          <Button>Sign In</Button>
        )}
      </div>
    </header>
  )
}
