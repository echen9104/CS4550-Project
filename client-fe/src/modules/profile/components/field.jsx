import '../assets/field.less'

import { useState, useEffect } from 'react'
import { Input } from 'antd'

const Field = (props) => {

    const { tag, keyName, value, editState, changeInfo } = props

    const [inputVal, setInputVal] = useState('')

    useEffect(() => {
        setInputVal(value)
    }, [value])

    const inputChange = (e) => {
        const val = e.target.value
        setInputVal(val)
        changeInfo({
            key: tag,
            value: val
        })
    }

    return (
        <div className="field-box">
            <div className="key">{ keyName }</div>
            {
                !editState
                    ?
                        (
                            <div className="field-show">
                                <span className="value">{ value }</span>
                            </div>
                        )
                    :
                        (
                            <div className="field-edit">
                                <Input placeholder={'please input ' + keyName} value={inputVal} onInput={inputChange} />
                            </div>
                        )
            }
        </div>
    )
}


export default Field