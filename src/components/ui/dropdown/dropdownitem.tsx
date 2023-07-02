import { FC, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from '@/components/ui/dropdown/dropdown.module.scss'

type PropsType = {
  withSeparator?: boolean
  content: string | ReactNode
  icon?: ReactNode
  onClickItem?: () => void
}

export const DropdownItem: FC<PropsType> = ({ icon, content, withSeparator = false }) => {
  return (
    <>
      <DropdownMenu.Item className={s.item}>
        <div className={s.content}>
          {icon}
          {content}
        </div>
      </DropdownMenu.Item>
      {withSeparator && <DropdownMenu.Separator className={s.separator} />}
    </>
  )
}
