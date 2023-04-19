import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MainInput from './MainInput'

const text = 'test typing'

beforeEach(() => {
  render(<MainInput />)
})

describe('MainInput component', () => {
  it('Render', () => {
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })
  it('Typing', async () => {
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    await userEvent.type(input, text)
    expect(input).toHaveValue(text)
  })
})
