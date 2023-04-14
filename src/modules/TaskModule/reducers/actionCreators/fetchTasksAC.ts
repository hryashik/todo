import TaskEntity from '../../entities/Task/Task.entity'
import { ActionTask, actionTypeEnum } from '../interfaces'

const fetchTasksAC = (payload: TaskEntity[]): ActionTask => ({
  type: actionTypeEnum.FETCH,
  payload,
})

export default fetchTasksAC
