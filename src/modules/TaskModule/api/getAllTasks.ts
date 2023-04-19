import TaskEntity from '../entities/Task/Task.entity'

const mockArr: TaskEntity[] = [
  new TaskEntity('Задача 1'),
  new TaskEntity('Задача 2'),
  new TaskEntity('Задача 3'),
  new TaskEntity('Задача 4'),
]
// Инициирую фейк запрос
// Чтобы посмотреть, как себя поведет приложение в случае ошибки, поменять resolve на reject
async function getAllTasks(): Promise<TaskEntity[]> {
  try {
    return await new Promise((resolve, reject) =>
      setTimeout(() => resolve(mockArr), 2000)
    )
  } catch (error) {
    throw new Error('Произошла ошибка в получении данных')
  }
}

export default getAllTasks
