import Task from './components/Task/Task'
import TasksList from './components/TasksLists/TasksLists'
import MyInput from './ui/MyInputs/MyInput'

function TaskModule() {
    return (
        <div>
            <MyInput />
            <TasksList />
        </div>
    )
}

export default TaskModule
