import { ActionTask, actionTypeEnum } from '../interfaces'

const completeTaskAC = (id: number): ActionTask => ({
  type: actionTypeEnum.COMPLETE,
  payload: id,
})

export default completeTaskAC
