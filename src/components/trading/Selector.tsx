import React from 'react'
import Select, { SingleValue } from 'react-select'
import './index.css'
import { CURRENCY, optionType } from '../../common/constants'

interface props {
    selected: { value: string, label: string},
    setValue: (newValue: SingleValue<optionType>) => void
}
export const Selector: React.FC<props> = ({selected, setValue}) => {
    return (
        <Select
            isSearchable={false}
            options={CURRENCY}
            defaultValue={CURRENCY[0]}
            value={selected}
            onChange={setValue}
            className="select"
        />
    )
}