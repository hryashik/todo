import TaskEntity from '../entities/Task/Task.entity'
import getAllTasks from './getAllTasks'

describe('fetch tasks', async () => {
  const data = await getAllTasks()
  it('recieved data - array', async () => {
    expect(Array.isArray(data)).toBeTruthy()
  })
  it('data has a length', () => {
    expect(data.length > 0).toBeTruthy()
  })
  it('data is instanceof TaskEntity', () => {
    expect(data[0]).toBeInstanceOf(TaskEntity)
  })
})
