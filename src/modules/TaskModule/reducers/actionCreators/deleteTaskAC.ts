import { ActionTask, actionTypeEnum } from '../interfaces'

const deleteTaskAC = (id: number): ActionTask => ({
  type: actionTypeEnum.DELETE,
  payload: id,
})

export default deleteTaskAC
