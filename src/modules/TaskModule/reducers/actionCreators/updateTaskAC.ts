import { ActionTask, actionTypeEnum } from '../interfaces'

const updateTaskAC = (id: number, title: string): ActionTask => ({
  type: actionTypeEnum.UPDATE,
  payload: {
    id,
    title,
  },
})

export default updateTaskAC
