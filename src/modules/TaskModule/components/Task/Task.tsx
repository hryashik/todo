import React from 'react'
import styles from './Task.module.scss'
import { Checkbox } from 'antd'
import DeleteButton from '../../ui/DeleteButton/DeleteButton'
import EditButton from '../../ui/EditButton/EditButton'

interface IProps {
    title: string
    id: number
    active: boolean
    complete: (id: number) => void
}

function Task({ title, id, active, complete }: IProps) {
    const checkStyle = !active && { textDecoration: 'lineThrough' }
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <Checkbox onChange={() => complete(id)} checked={!active} />
                <div>
                    <p style={{ textDecoration: active ? '' : 'line-through' }}>
                        {title}
                    </p>
                </div>
            </div>

            <div className={styles.buttons}>
                <EditButton />
                <DeleteButton />
            </div>
        </div>
    )
}

export default Task
