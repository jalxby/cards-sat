import { FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import s from './dropdown.module.scss'

import { Typography, UserInfoType } from '@/components'
type DropdownProps = {
  trigger?: ReactNode
  user?: UserInfoType
}

export const Dropdown: FC<DropdownProps> = ({ trigger, user }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
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
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.menu} sideOffset={5}>
          <DropdownMenu.Item className={s.item}>New Tab</DropdownMenu.Item>
          <DropdownMenu.Separator className={s.separator} />
          <DropdownMenu.Item className={s.item}>New Tab</DropdownMenu.Item>
          <DropdownMenu.Separator className={s.separator} />
          <DropdownMenu.Item className={s.item}>New Tab</DropdownMenu.Item>
          <DropdownMenu.Arrow className={s.arrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
