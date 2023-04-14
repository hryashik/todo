import { PlusOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import React, { useContext } from 'react'
import { useState } from 'react'
import { TaskContext } from '../..'
import createTaskAC from '../../reducers/actionCreators/createTaskAC'
import styles from './MyInput.module.scss'

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
  function enterHandler(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      dispatch(createTaskAC(value))
      setValue('')
    }
  }
  console.log('@input')
  return (
    <div className={styles.main}>
      <Input
        size='large'
        placeholder='Название задачи...'
        autoFocus={true}
        addonAfter={<PlusOutlined onClick={clickHandler} />}
        value={value}
        onChange={changeHandler}
        onKeyDown={enterHandler}
      />
    </div>
  )
}

export default React.memo(MyInput)
