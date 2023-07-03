import { ComponentPropsWithoutRef, FC } from 'react'

import * as SelectRDX from '@radix-ui/react-select'

import s from './select.module.scss'

import { ChevronDown } from '@/assets'
import { Typography } from '@/components'

type SelectProps = { label?: string } & ComponentPropsWithoutRef<'select'>
export const Select: FC<SelectProps> = ({ placeholder, label, ...rest }) => {
  return (
    <div className={s.container}>
      <Typography unselectable={'on'} variant={'body2'} color={'secondary'} className={s.label}>
        {label}
      </Typography>
      <SelectRDX.Root>
        <SelectRDX.Trigger className={s.trigger} disabled={rest.disabled}>
          <SelectRDX.Value placeholder={placeholder} />
          <SelectRDX.Icon className={s.icon}>
            <ChevronDown />
          </SelectRDX.Icon>
        </SelectRDX.Trigger>

        <SelectRDX.Portal>
          <SelectRDX.Content>
            <SelectRDX.ScrollUpButton />
            <SelectRDX.Viewport>
              <SelectRDX.Item value={'one'}>
                <SelectRDX.ItemText />
                <SelectRDX.ItemIndicator />
              </SelectRDX.Item>

              <SelectRDX.Group>
                <SelectRDX.Label />
                <SelectRDX.Item value={'two'}>
                  <SelectRDX.ItemText />
                  <SelectRDX.ItemIndicator />
                </SelectRDX.Item>
              </SelectRDX.Group>

              <SelectRDX.Separator />
            </SelectRDX.Viewport>
            <SelectRDX.ScrollDownButton />
            <SelectRDX.Arrow />
          </SelectRDX.Content>
        </SelectRDX.Portal>
      </SelectRDX.Root>
    </div>
  )
}
