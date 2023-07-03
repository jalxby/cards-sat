import { StoryObj } from '@storybook/react'
import type { Meta } from '@storybook/react'

import { Select } from './'

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'SelectLabel',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled',
    label: 'Disabled',
    disabled: true,
  },
}
