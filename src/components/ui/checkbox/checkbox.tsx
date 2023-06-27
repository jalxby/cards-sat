import { ComponentPropsWithoutRef } from 'react'

import * as CheckboxRDX from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

import { CheckedIcon } from '@/assets'

type CheckboxProps = { label?: string } & Omit<ComponentPropsWithoutRef<'input'>, 'type'>

export const Checkbox = (props: CheckboxProps) => {
  const { checked, label, disabled } = props

  return (
    <form>
      <div className={s.container}>
        <CheckboxRDX.Root className={s.CheckboxRoot} checked={checked} disabled={disabled}>
          <CheckboxRDX.Indicator className={s.CheckboxIndicator}>
            <CheckedIcon color={disabled ? 'var(--color-dark-100)' : 'var(--color-light-100)'} />
          </CheckboxRDX.Indicator>
        </CheckboxRDX.Root>
        <label className={`${s.label} ${disabled ? s.disabled : ''}`}>{label}</label>
      </div>
    </form>
  )
}
