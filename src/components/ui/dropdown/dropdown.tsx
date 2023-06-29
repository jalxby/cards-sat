import { FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import s from './dropdown.module.scss'
type DropdownProps = {
  trigger?: ReactNode
}

export const Dropdown: FC<DropdownProps> = ({ trigger }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          {trigger ? trigger : <HamburgerMenuIcon />}
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
