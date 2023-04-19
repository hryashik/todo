import { useEffect, useState } from 'react'
import TasksList from './components/TasksList/TasksList'
import MyInput from './components/MyInput/MainInput'
import getAllTasks from './api/getAllTasks'
import fetchTasksAC from './state/actionCreators/fetchTasksAC'
import StateProvider from './state/StateProvider'
import getState from './state/hooks/getState'
import useDispatch from './state/hooks/useDispatch'

function TaskModule() {
  // state
  const tasksState = getState()
  const dispatch = useDispatch()
  const [error, setError] = useState<Error | undefined>(undefined)
  console.log('@taskState', tasksState)
  // Получаем таски
  useEffect(() => {
    getAllTasks()
      .then(data => {
        dispatch(fetchTasksAC(data))
      })
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
    <>
      <MyInput />
      <TasksList tasks={tasksState} />
    </>
  )
}

export default () => (
  <StateProvider>
    <TaskModule />
  </StateProvider>
)
