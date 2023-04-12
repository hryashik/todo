import { PlusOutlined, UserOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'
import { useState } from 'react'

interface IProps {
    createTask: (userInput: string) => void
}

function MyInput({ createTask }: IProps) {
    const [value, setValue] = useState<string>('')
    function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(event.target.value)
    }
    function clickHandler() {
        createTask(value)
        setValue('')
    }
    return (
        <div style={{ marginBottom: '20px' }}>
            <Input
                size='large'
                placeholder='task name'
                addonAfter={<PlusOutlined onClick={clickHandler} />}
                value={value}
                onChange={changeHandler}
            />
        </div>
    )
}

export default React.memo(MyInput)
