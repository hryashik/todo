import { ActionTask, actionTypeEnum } from '../interfaces'

const createTaskAC = (title: string): ActionTask => ({
  type: actionTypeEnum.CREATE,
  payload: title,
})

export default createTaskAC
