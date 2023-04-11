import { PlusOutlined, UserOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { useState } from 'react'

function MyInput() {
    const [value, setValue] = useState<string>('')
    function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
    }

    return (
        <div style={{ marginBottom: '20px' }}>
            <Input
                size='large'
                placeholder='task name'
                addonAfter={<PlusOutlined onClick={() => console.log(123)} />}
                value={value}
                onChange={changeHandler}
            />
        </div>
    )
}

export default MyInput
