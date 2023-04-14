import TaskEntity from '../entities/Task/Task.entity'
import { ActionTask } from './interfaces'
import { actionTypeEnum } from './interfaces'

function taskReducer(state: TaskEntity[] | undefined, action: ActionTask) {
  if (state) {
    switch (action.type) {
      case actionTypeEnum.COMPLETE:
        return [...state].map(el =>
          el.id === action.payload ? { ...el, active: !el.active } : el
        )
      case actionTypeEnum.CREATE:
        const newTask = new TaskEntity(action.payload)
        console.log('reducer')
        return [...state, newTask]
      case actionTypeEnum.DELETE:
        return state.filter(el => el.id !== action.payload)
      case actionTypeEnum.UPDATE:
        return state.map(el =>
          el.id === action.payload.id
            ? { ...el, title: action.payload.title }
            : el
        )
      default:
        return state
    }
  } else {
    switch (action.type) {
      case actionTypeEnum.FETCH:
        return action.payload
      default:
        return undefined
    }
  }
}

export default taskReducer
