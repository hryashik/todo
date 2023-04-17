import {
  DeleteTwoTone,
  QuestionCircleOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import { Button, Popconfirm, Tooltip } from 'antd'

interface IProps {
  onConfirm: () => void
}

const DeleteButton: React.FC<IProps> = ({ onConfirm }) => {
  return (
    <Popconfirm
      onConfirm={() => onConfirm()}
      okText='Удалить'
      cancelText='Отмена'
      title='Удаление задачи'
      description='Вы уверены, что хотите удалить задачу?'
      icon={<QuestionCircleOutlined />}
    >
      <Tooltip title='Удалить'>
        <Button
          size='large'
          type='text'
          shape='default'
          icon={<DeleteOutlined style={{ color: 'red' }} />}
        />
      </Tooltip>
    </Popconfirm>
  )
}

export default DeleteButton
