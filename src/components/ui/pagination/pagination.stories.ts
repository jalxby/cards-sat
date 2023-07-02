import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    currentPage: 1,
    pageSize: 5,
    siblingCount: 1,
    totalCount: 30,
  },
}
