import { createContext, useContext, useReducer } from 'react'
import { ActionTaskType } from './interfaces'
import taskReducer from './reducers/taskReducer'
import TaskEntity from '../entities/Task/Task.entity'

/* const TaskProvider = createContext<React.Dispatch<ActionTaskType>>(() => {}) */

interface IProps {
  children: React.ReactNode
}

export const TaskStateProvider = createContext<TaskEntity[] | undefined>(
  undefined
)
export const DispatchProvider = createContext<React.Dispatch<ActionTaskType>>(
  () => {}
)

export function StateProvider({ children }: IProps) {
  const [tasks, dispatch] = useReducer(taskReducer, undefined)
  return (
    <TaskStateProvider.Provider value={tasks}>
      <DispatchProvider.Provider value={dispatch}>
        {children}
      </DispatchProvider.Provider>
    </TaskStateProvider.Provider>
  )
}

export default StateProvider
