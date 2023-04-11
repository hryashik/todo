import React, { useState } from 'react'
import Task from '../Task/Task'
import TabsList from '../Tabs/TabsList'

const todoArr = [
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
]

function TasksList() {
    const [tab, setTab] = useState<string>('active')
    const [tasks, setTasks] = useState(todoArr)
    const mappedTasks = tasks.map(el => (
        <Task key={el.id} {...el} complete={completeTask} />
    ))
    function completeTask(id: number) {
        setTasks(
            [...tasks].map(el =>
                el.id === id ? { ...el, active: false } : el,
            ),
        )
    }
    return (
        <div>
            <TabsList changeTab={setTab} active={tab} />
            {mappedTasks}
        </div>
    )
}

export default TasksList
