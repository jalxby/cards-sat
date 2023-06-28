import { ComponentProps, useState } from 'react'

import { clsx } from 'clsx'

import s from './input.module.scss'

import HideIcon from '@/assets/icons/HideIcon.tsx'
import SearchIcon from '@/assets/icons/SearchIcon.tsx'
import ShowIcon from '@/assets/icons/ShowIcon.tsx'
import { Typography } from '@/components'

type InputProps = {
  title: string
  inputType: 'text' | 'password' | 'search'
  error?: string
} & Omit<ComponentProps<'input'>, 'type'>

export const Input = (props: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { title, inputType, error, ...rest } = props
  const cNames = {
    input: clsx(
      s.input,
      inputType === 'password' && s.password,
      inputType === 'search' && s.search
    ),
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
        <input
          className={cNames.input}
          type={showPassword && inputType === 'password' ? 'text' : inputType}
          {...rest}
        />
        {inputType === 'password' && (
          <div className={s.rightIcon} onClick={showHidePassword}>
            {showPassword ? (
              <HideIcon color={'var(--color-light-100)'} />
            ) : (
              <ShowIcon color={'var(--color-light-100)'} />
            )}
          </div>
        )}
        <div className={s.searchIcon}>
          {inputType === 'search' && <SearchIcon color={'var(--color-dark-100)'} />}
        </div>
      </div>
      {error && (
        <Typography variant={'caption'} color={'error'} unselectable={'on'}>
          {title}
        </Typography>
      )}
    </div>
  )
}
