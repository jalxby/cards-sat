import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const WithImage: Story = {
  args: {
    size: 45,
    name: 'Avatar',
    src: 'https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA=w480-h960-rw',
  },
}

export const WithoutImage: Story = {
  args: {
    size: 45,
    name: 'Avatar',
    src: '',
  },
}
