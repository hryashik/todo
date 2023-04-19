import { screen, render } from '@testing-library/react'
import TasksList from './TasksList'
import SkeletonTasksList from '../SkeletonTasksLists/SkeletonTasksLists'

const mockArr = [
  { id: '1', title: 'first', active: true },
  { id: '2', title: 'second', active: true },
]

describe('Tasks list', () => {
  test('Render if have tasks', () => {
    render(<TasksList tasks={mockArr} />)
    const task = screen.queryByText('first')
    expect(task).toBeVisible()
  })
  // Если таски не пришли
  it('Render if tasks undefined', () => {
    render(<TasksList tasks={undefined} />)
    expect(screen.getByText('Активные')).toBeVisible()
  })
  it('Render empty list', () => {
    render(<TasksList tasks={[]} />)
    expect(screen.queryByText(/Список пуст/i))
  })
  it('Render with 2 items', () => {
    render(<TasksList tasks={mockArr} />)
    const task1 = screen.queryByText(mockArr[0].title)
    const task2 = screen.queryByText(mockArr[1].title)
    expect(task1).toBeVisible()
    expect(task2).toBeVisible()
  })
})
