import { ActionTaskType, actionTypeEnum } from '../interfaces'

const updateTaskAC = (id: string, title: string): ActionTaskType => ({
  type: actionTypeEnum.UPDATE,
  payload: {
    id,
    title,
  },
})

export default updateTaskAC
