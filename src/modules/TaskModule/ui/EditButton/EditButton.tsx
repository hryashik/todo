import { EditTwoTone } from '@ant-design/icons'
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
        type='ghost'
        shape='circle'
        icon={<EditTwoTone />}
      />
    </Tooltip>
  )
}

export default React.memo(EditButton)
