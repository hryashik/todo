import { useContext } from 'react'
import StateProvider, { DispatchProvider } from '../StateProvider'

const useDispatch = () => useContext(DispatchProvider)

export default useDispatch
