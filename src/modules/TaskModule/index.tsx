import { useEffect, useState } from 'react'
import Task from './components/Task/Task'
import TasksList from './components/TasksLists/TasksLists'
import MyInput from './ui/MyInputs/MyInput'
import { ITask } from './entities/Task/Task.interface'
import getAllTasks from './api/getAllTasks'

function TaskModule() {
    const [tasks, setTasks] = useState<ITask[] | undefined>([])
    useEffect(() => {
        getAllTasks()
            .then(data => setTasks(data))
            .catch(error => console.log(error))
    }, [])
    function completeTask(id: number) {
        if (tasks) {
            setTasks(
                [...tasks].map(el =>
                    el.id === id ? { ...el, active: !el.active } : el,
                ),
            )
        }
    }
    return (
        <div>
            <MyInput />
            <TasksList tasks={tasks} completeTask={completeTask} />
        </div>
    )
}

export default TaskModule
