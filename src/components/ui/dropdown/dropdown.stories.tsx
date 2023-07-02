import type { Meta, StoryObj } from '@storybook/react'

import { Dropdown } from './'

import { Avatar } from '@/components'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    user: {
      name: 'Alex',
      email: 'jalxby@gmail.com',
      avatar: '',
    },
    trigger: <Avatar name={'Avatar'} size={50} />,
  },
}
