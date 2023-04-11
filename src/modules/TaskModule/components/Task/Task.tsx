import React from 'react'
import styles from './Task.module.scss'
import { Button, Checkbox, Tooltip } from 'antd'
import { DeleteTwoTone, EditOutlined, EditTwoTone } from '@ant-design/icons'
import DeleteButton from '../../ui/DeleteButton/DeleteButton'
import EditButton from '../../ui/EditButton/EditButton'

interface IProps {
    title: String
}

function Task(/* { title }: IProps */) {
    return (
        <div className={styles.main}>
            <div className={styles.title}>
                <Checkbox />
                <div>
                    <p>Задача</p>
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
