import { ComponentProps, FC } from 'react'

import * as AvatarRDX from '@radix-ui/react-avatar'

import s from './avatar.module.scss'

type AvatarProps = {
  name: string | undefined
  src?: ComponentProps<'img'>['src']
  size?: ComponentProps<'img'>['width']
}
export const Avatar: FC<AvatarProps> = ({ src, size, name }) => {
  return (
    <AvatarRDX.Root style={{ width: `${size}px`, height: `${size}px` }} className={s.avatarRoot}>
      <AvatarRDX.Image className={s.avatarImage} src={src} alt={`${name} avatar`} />
      <AvatarRDX.Fallback className={s.avatarFallback} delayMs={600}>
        {name?.slice(0, 2).toUpperCase()}
      </AvatarRDX.Fallback>
    </AvatarRDX.Root>
  )
}
