import TaskEntity from '../../entities/Task/Task.entity'
import { ActionTaskType, actionTypeEnum } from '../interfaces'

const fetchTasksAC = (payload: TaskEntity[]): ActionTaskType => ({
  type: actionTypeEnum.FETCH,
  payload,
})

export default fetchTasksAC
