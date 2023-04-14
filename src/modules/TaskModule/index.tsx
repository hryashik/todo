import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'
import TasksList from './components/TasksLists/TasksLists'
import MyInput from './ui/MyInputs/MainInput'
import getAllTasks from './api/getAllTasks'
import TaskEntity from './entities/Task/Task.entity'
import taskReducer from './reducers/taskReducer'
import { actionTypeEnum } from './reducers/interfaces'
import fetchTasksAC from './reducers/actionCreators/fetchTasksAC'

export const TaskContext = createContext<any>(null)

function TaskModule() {
  // reducer
  const [tasksState, dispatch] = useReducer(taskReducer, undefined)
  console.log('@taskState', tasksState)

  const [tasks, setTasks] = useState<TaskEntity[] | undefined>(undefined)
  const [error, setError] = useState<Error | undefined>(undefined)

  // Получаем таски
  useEffect(() => {
    getAllTasks()
      .then(data => dispatch(fetchTasksAC(data)))
      .catch(error => setError(error))
  }, [])

  // Измененяем стейт
  function completeTask(id: number) {
    if (tasks) {
      setTasks(
        [...tasks].map(el =>
          el.id === id ? { ...el, active: !el.active } : el
        )
      )
    }
  }
  function createTask(userInput: string) {
    if (tasks && userInput) {
      const newTask = new TaskEntity(userInput)
      setTasks([...tasks, newTask])
    }
  }
  function deleteTask(id: number) {
    if (tasks) setTasks(tasks.filter(el => el.id !== id))
  }
  function updateTask(id: number, title: string) {
    if (tasks && title.length) {
      setTasks(tasks.map(el => (el.id === id ? { ...el, title } : el)))
    }
  }

  // Мемоизирую все функции
  // (в данном случае мемоизировать complete и delete бесполезно, так как меняется стейт в самом тасклисте)
  // Но create спасает от лишних перерисовок инпута
  const memoCreateTask = useCallback(
    (text: string) => createTask(text),
    [tasks]
  )
  const memoCompleteTask = useCallback(
    (id: number) => completeTask(id),
    [tasks]
  )
  const memoDeleteTask = useCallback(
    (id: number) => deleteTask(id),
    [tasks?.length]
  )
  const memoUpdateTask = useCallback(
    (id: number, title: string) => updateTask(id, title),
    [tasks?.find(el => el.id)]
  )

  // Если получаем ошибку
  if (error) {
    return (
      <>
        <MyInput createTask={memoCreateTask} />
        <h1>Произошла ошибка</h1>
      </>
    )
  }

  return (
    <TaskContext.Provider value={dispatch}>
      <div>
        <MyInput createTask={memoCreateTask} />
        <TasksList
          tasks={tasksState}
          completeTask={memoCompleteTask}
          deleteTask={memoDeleteTask}
          updateTask={memoUpdateTask}
        />
      </div>
    </TaskContext.Provider>
  )
}

export default TaskModule
