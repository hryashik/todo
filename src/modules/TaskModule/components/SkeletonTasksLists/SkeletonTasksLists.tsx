import React from 'react'
import { Skeleton } from 'antd'

const SkeletonTasksList: React.FC = () => {
    const list = Array(6)
        .fill('')
        .map((el, idx) => (
            <Skeleton.Input
                key={idx}
                active
                size='large'
                block
                style={{
                    marginBottom: '15px',
                    height: '50px',
                    borderRadius: '8px',
                }}
            />
        ))
    return <div>{list}</div>
}

export default SkeletonTasksList
