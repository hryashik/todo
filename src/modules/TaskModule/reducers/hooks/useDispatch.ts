import { useContext } from 'react'
import { ActionTaskType } from '../interfaces'
import TaskProvider from '../TaskProvider'

const useDispatch = () => useContext(TaskProvider)

export default useDispatch
