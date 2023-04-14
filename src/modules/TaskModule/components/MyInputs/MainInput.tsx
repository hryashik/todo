import { PlusOutlined, UserOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React, { useContext } from 'react'
import { useState } from 'react'
import { TaskContext } from '../..'
import createTaskAC from '../../reducers/actionCreators/createTaskAC'

function MyInput() {
  const [value, setValue] = useState<string>('')
  const dispatch = useContext(TaskContext)
  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }
  function clickHandler() {
    dispatch(createTaskAC(value))
    setValue('')
  }
  console.log('@input')
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
