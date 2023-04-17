import styles from './Task.module.scss'
import { Button, Checkbox, Input } from 'antd'
import DeleteButton from '../../ui/DeleteButton/DeleteButton'
import EditButton from '../../ui/EditButton/EditButton'
import { useCallback, useContext, useState } from 'react'
import { CheckOutlined } from '@ant-design/icons'
import React from 'react'
import completeTaskAC from '../../state/actionCreators/completeTaskAC'
import deleteTaskAC from '../../state/actionCreators/deleteTaskAC'
import updateTaskAC from '../../state/actionCreators/updateTaskAC'
import useDispatch from '../../state/hooks/useDispatch'

interface IProps {
  title: string
  id: string
  active: boolean
}

function Task({ title, id, active }: IProps) {
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState(title)
  const [errorInput, setErrorInput] = useState<boolean>(false)
  console.log('Таска нарисовалась')
  // Различные обработчики
  function changeInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.currentTarget.value)
  }
  function toggleEditMode() {
    setInputValue(title)
    setEditMode(!editMode)
  }
  const memoToggleEditMode = useCallback(() => {
    toggleEditMode()
  }, [])
  function saveClickHandler() {
    if (inputValue.length > 3 && inputValue !== title) {
      dispatch(updateTaskAC(id, inputValue))
      setEditMode(false)
      setErrorInput(false)
    } else if (inputValue === title) {
      setEditMode(false)
    } else {
      setErrorInput(true)
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <Checkbox
          onChange={() => dispatch(completeTaskAC(id))}
          checked={!active}
        />
        {
          // Если включен режим редактирования, показать edit блок
          editMode ? (
            <div className={styles.title__editBlock}>
              <Input
                autoFocus={true}
                value={inputValue}
                onChange={changeInputHandler}
                status={errorInput ? 'error' : ''}
              />
              <Button type='default' onClick={saveClickHandler}>
                <CheckOutlined />
              </Button>
            </div>
          ) : (
            <p style={{ textDecoration: active ? '' : 'line-through' }}>
              {title}
            </p>
          )
        }
      </div>

      <div className={styles.buttons}>
        <EditButton onClick={memoToggleEditMode} />
        <DeleteButton onConfirm={() => dispatch(deleteTaskAC(id))} />
      </div>
    </div>
  )
}

export default React.memo(Task)
