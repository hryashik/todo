import { ActionTaskType, actionTypeEnum } from '../interfaces'

const createTaskAC = (title: string): ActionTaskType => ({
  type: actionTypeEnum.CREATE,
  payload: title,
})

export default createTaskAC
