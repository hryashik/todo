import { useEffect, useReducer, useState } from 'react'
import TasksList from './components/TasksLists/TasksLists'
import MyInput from './components/MyInput/MainInput'
import getAllTasks from './api/getAllTasks'
import taskReducer from './state/reducers/taskReducer'
import fetchTasksAC from './state/actionCreators/fetchTasksAC'
import TaskProvider from './state/TaskProvider'

function TaskModule() {
  // state
  const [tasksState, dispatch] = useReducer(taskReducer, undefined)
  const [error, setError] = useState<Error | undefined>(undefined)
  console.log('@taskState', tasksState)

  // Получаем таски
  useEffect(() => {
    getAllTasks()
      .then(data => dispatch(fetchTasksAC(data)))
      .catch(error => setError(error))
  }, [])

  // Если получаем ошибку
  if (error) {
    return (
      <>
        <MyInput />
        <h1>Произошла ошибка</h1>
      </>
    )
  }

  return (
    <TaskProvider.Provider value={dispatch}>
      <div>
        <MyInput />
        <TasksList tasks={tasksState} />
      </div>
    </TaskProvider.Provider>
  )
}

export default TaskModule
