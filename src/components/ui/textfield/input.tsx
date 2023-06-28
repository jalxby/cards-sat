import { ComponentProps, useState } from 'react'

import { clsx } from 'clsx'

import s from './input.module.scss'

import HideIcon from '@/assets/icons/HideIcon.tsx'
import ShowIcon from '@/assets/icons/ShowIcon.tsx'
import { Typography } from '@/components'

type InputProps = {
  title: string
  inputType: 'text' | 'password' | 'search'
  error?: string
} & Omit<ComponentProps<'input'>, 'type'>

export const Input = (props: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { title, inputType, error } = props
  const cNames = {
    input: clsx(s.input, inputType === 'password' && s.password),
  }

  const showHidePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className={s.root}>
      <Typography variant={'body2'} color={'secondary'} unselectable={'on'}>
        {title}
      </Typography>
      <div className={s.inputContainer}>
        <input className={cNames.input} type={inputType} />
        {inputType === 'password' && (
          <div className={s.rightIcon} onClick={showHidePassword}>
            {showPassword ? (
              <HideIcon color={'var(--color-light-100)'} />
            ) : (
              <ShowIcon color={'var(--color-light-100)'} />
            )}
          </div>
        )}
      </div>
      {error && (
        <Typography variant={'caption'} color={'error'} unselectable={'on'}>
          {title}
        </Typography>
      )}
    </div>
  )
}
