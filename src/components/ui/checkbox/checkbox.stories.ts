import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from './'

const meta = {
  title: 'Components/Select',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: true,
  },
}
export const WithLabel: Story = {
  args: {
    checked: true,
    label: 'Label Test',
    disabled: true,
  },
}
