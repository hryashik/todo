import { ActionTaskType, actionTypeEnum } from '../interfaces'

const completeTaskAC = (id: string): ActionTaskType => ({
  type: actionTypeEnum.COMPLETE,
  payload: id,
})

export default completeTaskAC
