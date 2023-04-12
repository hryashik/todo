import React, { useState } from 'react'
import Task from '../Task/Task'
import TabsList from '../Tabs/TabsList'

enum Tabs {
    ACTIVE = 'active',
    ALL = 'all',
    FINISHED = 'finished',
}

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
    const mappedTasks = () => {
        switch (tab) {
            // Возвращаем все таски
            case Tabs.ALL:
                return tasks.map(el => (
                    <Task key={el.id} {...el} complete={completeTask} />
                ))
            // Возвращаем только завершенные
            case Tabs.FINISHED:
                return tasks
                    .filter(el => el.active === false)
                    .map(el => (
                        <Task key={el.id} {...el} complete={completeTask} />
                    ))
            // Возвращаем только активные
            default:
                return tasks
                    .filter(el => el.active === true)
                    .map(el => (
                        <Task key={el.id} {...el} complete={completeTask} />
                    ))
        }
    }
    console.log(mappedTasks(), tasks)
    function completeTask(id: number) {
        setTasks(
            [...tasks].map(el =>
                el.id === id ? { ...el, active: !el.active } : el,
            ),
        )
    }

    return (
        <div>
            <TabsList changeTab={setTab} active={tab} />
            {mappedTasks()}
        </div>
    )
}

export default TasksList
