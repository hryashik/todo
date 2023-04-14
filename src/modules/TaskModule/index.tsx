import { createContext, useEffect, useReducer, useState } from 'react'
import TasksList from './components/TasksLists/TasksLists'
import MyInput from './components/MyInput/MainInput'
import getAllTasks from './api/getAllTasks'
import taskReducer from './reducers/taskReducer'
import fetchTasksAC from './reducers/actionCreators/fetchTasksAC'

export const TaskContext = createContext<any>(null)

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
    <TaskContext.Provider value={dispatch}>
      <div>
        <MyInput />
        <TasksList tasks={tasksState} />
      </div>
    </TaskContext.Provider>
  )
}

export default TaskModule
