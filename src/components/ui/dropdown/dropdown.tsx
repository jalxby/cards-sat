import { FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import s from './dropdown.module.scss'

import { Avatar, Typography, UserInfoType } from '@/components'
import { DropdownItem } from '@/components/ui/dropdown/dropdownitem.tsx'

type DropdownProps = {
  trigger?: ReactNode
  user?: UserInfoType
}

export const Dropdown: FC<DropdownProps> = ({ trigger, user }) => {
  const menuItemsContent = {
    first: (
      <div className={s.userDataWrapper}>
        <Avatar name={user?.name} size={36} />
        <div className={s.userData}>
          <Typography color={'primary'} variant={'subtitle2'}>
            {user?.name}
          </Typography>
          <Typography color={'secondary'} variant={'caption'}>
            {user?.email}
          </Typography>
        </div>
      </div>
    ),
    second: (
      <Typography color={'primary'} variant={'caption'}>
        My Profile
      </Typography>
    ),
    third: (
      <Typography color={'primary'} variant={'caption'}>
        Sign Out
      </Typography>
    ),
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {/* TODO move trigger with name to somewhere */}
        {trigger ? (
          <div className={s.userInfo}>
            <Typography variant={'subtitle1'}>
              <span className={s.userName}>{user?.name}</span>
            </Typography>
            {trigger}
          </div>
        ) : (
          <HamburgerMenuIcon />
        )}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.menu} sideOffset={5}>
          <DropdownItem content={menuItemsContent.first} withSeparator={true} />
          <DropdownItem content={menuItemsContent.second} withSeparator={true} />
          <DropdownItem content={menuItemsContent.third} />
          <DropdownMenu.Arrow className={s.arrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
