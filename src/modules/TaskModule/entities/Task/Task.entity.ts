class TaskEntity {
    id: number
    title: string
    active: boolean
    constructor(text: string) {
        this.id = Math.random()
        this.title = text
        this.active = true
    }
}

export default TaskEntity
