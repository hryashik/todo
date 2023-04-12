import { useState } from 'react'
import Task from '../Task/Task'
import TabsList from '../Tabs/TabsList'
import SkeletonTasksList from '../SkeletonTasksLists/SkeletonTasksLists'

enum TabsFilter {
    ACTIVE = 'active',
    ALL = 'all',
    FINISHED = 'finished',
}

interface IProps {
    tasks: TaskEntity[] | undefined
    completeTask: (id: number) => void
}

function TasksList({ tasks, completeTask }: IProps) {
    const [tab, setTab] = useState<TabsFilter>(TabsFilter.ACTIVE)
    const mappedTasks = () => {
        if (tasks)
            switch (tab) {
                // Возвращаем все таски
                case TabsFilter.ALL:
                    return [...tasks]
                        .sort((a, b) =>
                            a.active === b.active ? 0 : a ? -1 : 1,
                        )
                        .map(el => (
                            <Task key={el.id} {...el} complete={completeTask} />
                        ))
                // Возвращаем только завершенные
                case TabsFilter.FINISHED:
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
    return (
        <div>
            <TabsList changeTab={setTab} active={tab} />
            {
                // Проверка на наличие тасков
                tasks?.length ? mappedTasks() : <SkeletonTasksList />
            }
        </div>
    )
}

export default TasksList
