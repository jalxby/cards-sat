import { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { Header } from './'

const meta = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedOff: Story = {
  args: {
    title: 'Title',
    isAuth: false,
    user: {
      name: 'Alex',
      avatar: '',
      email: 'jalxby@gmail.com',
    },
  },
}

export const LoggedInNoAvatar: Story = {
  args: {
    title: 'Title',
    isAuth: true,
    user: {
      name: 'Alex',
      avatar: '',
      email: 'jalxby@gmail.com',
    },
  },
}
export const LoggedInWithAvatar: Story = {
  args: {
    title: 'Title',
    isAuth: true,
    user: {
      name: 'Alex',
      avatar:
        'https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA=w240-h480-rw',
      email: 'jalxby@gmail.com',
    },
  },
}
