import { ITask } from '../entities/Task/Task.interface'

const mockArr: ITask[] = [
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

async function getAllTasks(): Promise<ITask[] | undefined> {
    return new Promise<ITask[] | undefined>(resolve =>
        setTimeout(() => resolve(mockArr), 2000),
    )
}

export default getAllTasks
