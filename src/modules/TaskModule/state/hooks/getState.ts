import { useContext } from 'react'
import { TaskStateProvider } from '../StateProvider'

const getState = () => useContext(TaskStateProvider)

export default getState
