import TaskEntity from '../entities/Task/Task.entity'

const mockArr: TaskEntity[] = [
    {
        id: 1,
        title: 'Задача 1',
        active: true,
    },
    {
        id: 2,
        title: 'Задача 2',
        active: true,
    },
    {
        id: 3,
        title: 'Задача 3',
        active: true,
    },
    {
        id: 4,
        title: 'Задача 4',
        active: true,
    },
]
// Инициирую фейк запрос
// Чтобы посмотреть, как себя поведет приложение в случае ошибки, поменять resolve на reject
async function getAllTasks(): Promise<TaskEntity[]> {
    try {
        return await new Promise((resolve, reject) =>
            setTimeout(() => resolve(mockArr), 2000),
        )
    } catch (error) {
        throw new Error('Произошла ошибка в получении данных')
    }
}

export default getAllTasks
