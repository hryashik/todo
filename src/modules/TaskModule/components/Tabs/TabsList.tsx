import React from 'react'
import { Tabs, TabsProps } from 'antd'

const items: TabsProps['items'] = [
  {
    key: 'all',
    label: `Все`,
  },
  {
    key: 'active',
    label: `Активные`,
  },
  {
    key: 'finished',
    label: `Завершенные`,
  },
]

interface IProps {
  changeTab: any
  active: string
}

const TabsList: React.FC<IProps> = ({ changeTab, active }) => {
  const onChange = (key: string) => {
    changeTab(key)
  }

  return (
    <>
      <Tabs activeKey={active} items={items} onChange={onChange} />
    </>
  )
}

export default TabsList
