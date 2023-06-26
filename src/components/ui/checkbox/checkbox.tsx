import { ComponentPropsWithoutRef } from 'react'

import * as CheckboxRDX from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

import { CheckedIcon } from '@/assets'

type CheckboxProps = {} & Omit<ComponentPropsWithoutRef<'input'>, 'type'>

export const Checkbox = (props: CheckboxProps) => {
  return (
    <form>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CheckboxRDX.Root className={s.CheckboxRoot} id="c1">
          <CheckboxRDX.Indicator className="CheckboxIndicator">
            {props.checked && <CheckedIcon />}
          </CheckboxRDX.Indicator>
        </CheckboxRDX.Root>
        <label className="Label" htmlFor="c1">
          Accept terms and conditions.
        </label>
      </div>
    </form>
  )
}
