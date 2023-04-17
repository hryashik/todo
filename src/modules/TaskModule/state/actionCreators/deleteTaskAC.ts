import { ActionTaskType, actionTypeEnum } from '../interfaces'

const deleteTaskAC = (id: string): ActionTaskType => ({
  type: actionTypeEnum.DELETE,
  payload: id,
})

export default deleteTaskAC
