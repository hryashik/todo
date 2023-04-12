import { useEffect, useState } from 'react'
import TasksList from './components/TasksLists/TasksLists'
import MyInput from './ui/MyInputs/MyInput'
import getAllTasks from './api/getAllTasks'
import TaskEntity from './entities/Task/Task.entity'

function TaskModule() {
    const [tasks, setTasks] = useState<TaskEntity[] | undefined>([])
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
    function createTask(userInput: string) {
        if (tasks && userInput) {
            const newTask = new TaskEntity(userInput)
            setTasks([...tasks, newTask])
        }
    }
    return (
        <div>
            <MyInput createTask={createTask} />
            <TasksList tasks={tasks} completeTask={completeTask} />
        </div>
    )
}

export default TaskModule
