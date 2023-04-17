import { v4 } from 'uuid'

class TaskEntity {
  id: string
  title: string
  active: boolean
  constructor(text: string) {
    this.id = v4()
    this.title = text
    this.active = true
  }
}

export default TaskEntity
