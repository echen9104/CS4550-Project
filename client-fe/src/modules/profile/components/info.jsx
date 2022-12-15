import '../assets/info.less'

import { useState } from 'react'
import { Button } from 'antd'
import Field from './field'

const UserInfo = () => {
    const [editState, setEditState] = useState(false)

    const [infoList, setInfoList] = useState(
        [
            {
                key: 'username',
                label: 'Username',
                value: 'qiuyuuanq',
            },
            {
                key: 'age',
                label: 'Age',
                value: '20',
            },
            {
                key: 'email',
                label: 'Email Address',
                value: 'qiuyuxuanq@gmail.com',
            },
            {
                key: 'shoeSize',
                label: 'Shoe Size',
                value: '44',
            },
        ]
    )

    const toggleEditState = () => {
        setEditState(!editState)
    }

    const changeInfo = (obj) => {
        const targetIndex = infoList.findIndex(item => item.key == obj.key)
        infoList[targetIndex].value = obj.value
        setInfoList[infoList]
    }

    return (
        <div className="user-info">
            <h2>User Info</h2>
            <Button type="dashed" onClick={ toggleEditState }>{ editState ? 'Save' : 'Edit' }</Button>
            <div className="info-list">
                {
                    infoList.map((item) => {
                        return (
                            <Field key={item.key} tag={item.key} keyName={item.label} value={item.value} editState={editState} changeInfo={changeInfo} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UserInfo