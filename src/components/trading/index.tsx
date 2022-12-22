import React, { useCallback, useEffect, useState } from 'react'
import './index.css'
import Countdown, { CountdownTimeDelta } from 'react-countdown'
import { enchantTime, getRandomRate } from '../../common/handlers'
import { Selector } from '../../components/trading/Selector'
import { SingleValue } from 'react-select'
import { optionType, exchangeRate } from '../../common/constants'
import { ExchangeRate } from './ExchangeRate'


interface props {
    from: number
    addToArchive: (action : {[key:string]: any}) => void
}


const timer: React.FC<CountdownTimeDelta> = ({hours, minutes, seconds}) => {
    return <span>{enchantTime(hours, minutes, seconds)}</span>
}

export const Trading:React.FC<props> = ({from, addToArchive}) => {
    const [cur, setCur] = useState<optionType>({value: "USD/RUB", label: "USD/RUB"})
    const [rate, setRate] = useState<exchangeRate>(getRandomRate())

    useEffect(() => {setInterval(()=>{setRate(getRandomRate())}, 4500)}, [])

    const setOption = useCallback(
        (newValue: SingleValue<optionType>) => {
            if(newValue) {
                setCur(newValue)
                setRate(getRandomRate())
            }
        },
        [setCur]
    )
    return (
        <div className="tradingContainer">
            <div className="timer">
                <Countdown renderer={timer} date={from}/>
            </div>

            <div className="selector">
                <Selector selected={cur} setValue={setOption}/>
            </div>
            <ExchangeRate addToArchive={addToArchive} cur={cur} buyValue={rate.buyValue} sellValue={rate.sellValue}/>
        </div>
    )
}