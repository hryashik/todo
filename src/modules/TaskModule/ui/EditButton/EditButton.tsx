import { EditTwoTone } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import React from 'react'

function EditButton() {
    return (
        <Tooltip title='Изменить'>
            <Button
                size='large'
                type='ghost'
                shape='circle'
                icon={<EditTwoTone />}
            />
        </Tooltip>
    )
}

export default EditButton
