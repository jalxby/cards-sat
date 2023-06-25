import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'body1',
        'body2',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
        'link',
        'link2',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    variant: 'large',
    children: 'Large Title',
  },
}
export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'h1 Title',
  },
}
export const H2: Story = {
  args: {
    variant: 'h1',
    children: 'h1 Title',
  },
}
export const H3: Story = {
  args: {
    variant: 'h1',
    children: 'h1 Title',
  },
}
export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'body1 Title',
  },
}
