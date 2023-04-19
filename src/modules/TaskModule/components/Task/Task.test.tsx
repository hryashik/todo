import { screen, render } from '@testing-library/react'
import Task from './Task'

const mock = { id: '1', title: 'first', active: true }

describe('Task', () => {
  it('Task render', () => {
    render(<Task {...mock} />)
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    expect(screen.queryByText(mock.title)).toBeVisible()
    expect(checkbox).toBeInTheDocument()
    expect(checkbox.checked).toBeFalsy()
  })
  it('Task is checked', () => {
    const checkedTask = { ...mock, active: false }
    render(<Task {...checkedTask} />)
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    expect(checkbox.checked).toBeTruthy()
  })
})
