import { EditTwoTone, EditOutlined } from '@ant-design/icons'
import { Button, Tooltip } from 'antd'
import React from 'react'

interface IProps {
  onClick: () => void
}

function EditButton({ onClick }: IProps) {
  return (
    <Tooltip title='Изменить'>
      <Button
        onClick={onClick}
        size='large'
        type='text'
        shape='default'
        icon={<EditOutlined style={{ color: '#00a3ff' }} />}
      />
    </Tooltip>
  )
}

export default React.memo(EditButton)
