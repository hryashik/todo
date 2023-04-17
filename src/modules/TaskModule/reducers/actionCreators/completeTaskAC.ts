import { ActionTaskType, actionTypeEnum } from '../interfaces'

const completeTaskAC = (id: number): ActionTaskType => ({
  type: actionTypeEnum.COMPLETE,
  payload: id,
})

export default completeTaskAC
