import { useState } from 'react'
import Task from '../Task/Task'
import TabsList from '../Tabs/TabsList'
import SkeletonTasksList from '../SkeletonTasksLists/SkeletonTasksLists'
import TaskEntity from '../../entities/Task/Task.entity'
import React from 'react'

enum TabsFilter {
  ACTIVE = 'active',
  ALL = 'all',
  FINISHED = 'finished',
}

interface IProps {
  tasks: TaskEntity[] | undefined
}

function TasksList({ tasks }: IProps) {
  const [tab, setTab] = useState<TabsFilter>(TabsFilter.ACTIVE)
  const mappedTasks = () => {
    if (tasks)
      switch (tab) {
        // Возвращаем все таски
        case TabsFilter.ALL:
          return [...tasks]
            .sort((a, b) => (a.active === b.active ? 0 : a.active ? -1 : 1))
            .map(el => <Task key={el.id} {...el} />)
        // Возвращаем только завершенные
        case TabsFilter.FINISHED:
          return tasks
            .filter(el => el.active === false)
            .map(el => <Task key={el.id} {...el} />)
        // Возвращаем только активные
        default:
          return tasks
            .filter(el => el.active === true)
            .map(el => <Task key={el.id} {...el} />)
      }
  }
  // Если таски еще не пришли, то отрисовываем скелетон
  if (!tasks) {
    return (
      <div>
        <TabsList changeTab={setTab} active={tab} />
        <SkeletonTasksList />
      </div>
    )
  }
  return (
    <div>
      <TabsList changeTab={setTab} active={tab} />
      {
        // Если ответ пришел, но у пользователя нет задач, просим создать
        tasks.length ? mappedTasks() : <h3>Список пуст, добавьте задачу</h3>
      }
    </div>
  )
}

export default React.memo(TasksList)
