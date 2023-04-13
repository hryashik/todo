import './App.css'
import MainLogo from './components/MainLogo/MainLogo'
import TaskModule from './modules/TaskModule'

export default function App() {
  return (
    <div className='main'>
      <MainLogo />
      <TaskModule />
    </div>
  )
}
