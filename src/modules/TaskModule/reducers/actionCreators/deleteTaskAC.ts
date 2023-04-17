import { ActionTaskType, actionTypeEnum } from '../interfaces'

const deleteTaskAC = (id: number): ActionTaskType => ({
  type: actionTypeEnum.DELETE,
  payload: id,
})

export default deleteTaskAC
