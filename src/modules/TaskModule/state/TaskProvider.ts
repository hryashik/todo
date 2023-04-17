import { createContext } from 'react'
import { ActionTaskType } from './interfaces'

const TaskProvider = createContext<React.Dispatch<ActionTaskType>>(() => {})

export default TaskProvider
