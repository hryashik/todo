import styles from './Task.module.scss'
import { Checkbox } from 'antd'
import DeleteButton from '../../ui/DeleteButton/DeleteButton'
import EditButton from '../../ui/EditButton/EditButton'

interface IProps {
    title: string
    id: number
    active: boolean
    completeTask: (id: number) => void
    deleteTask: (id: number) => void
}

function Task({ title, id, active, completeTask, deleteTask }: IProps) {
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <Checkbox onChange={() => completeTask(id)} checked={!active} />
                <div>
                    <p style={{ textDecoration: active ? '' : 'line-through' }}>
                        {title}
                    </p>
                </div>
            </div>

            <div className={styles.buttons}>
                <EditButton />
                <DeleteButton onConfirm={() => deleteTask(id)} />
            </div>
        </div>
    )
}

export default Task
