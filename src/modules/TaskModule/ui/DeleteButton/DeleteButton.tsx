import { DeleteTwoTone, QuestionCircleOutlined } from '@ant-design/icons'
import { Button, Popconfirm, Tooltip } from 'antd'

const DeleteButton: React.FC = () => (
    <Popconfirm
        okText='Удалить'
        cancelText='Отмена'
        title='Удаление задачи'
        description='Вы уверены, что хотите удалить задачу?'
        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
        <Tooltip title='Удалить'>
            <Button
                size='large'
                type='ghost'
                shape='circle'
                danger={true}
                icon={<DeleteTwoTone twoToneColor='#eb2f96' />}
            />
        </Tooltip>
    </Popconfirm>
)

export default DeleteButton
