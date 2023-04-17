import { PlusOutlined, UserOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'
import { useState } from 'react'
import createTaskAC from '../../state/actionCreators/createTaskAC'
import styles from './MyInput.module.scss'
import useDispatch from '../../state/hooks/useDispatch'

function MyInput() {
  const [value, setValue] = useState<string>('')
  const dispatch = useDispatch()
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
