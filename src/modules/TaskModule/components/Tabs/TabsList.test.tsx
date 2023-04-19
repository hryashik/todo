import { render, screen } from '@testing-library/react'
import TabsList from './TabsList'

describe('TabsList', () => {
  it('Render', () => {
    render(<TabsList changeTab={() => {}} active='active' />)
    expect(screen.queryByText('Активные')).toBeInTheDocument()
  })
})
