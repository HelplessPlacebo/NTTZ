import React, { useState } from 'react'
import './index.css'
import { exchangeRate, optionType } from '../../common/constants';
import { Modal } from '../../components/modal';

type handler = (action:string, price:number) => void

interface CSProps {
    action: string
    value: number
    handler: handler
}

const CurrencyStatus: React.FC<CSProps> = ({action, value, handler}) => {
    return (
        <div onClick={() => {handler(action, value)}} className={action === "buy" ? "buyCard" : "sellCard"}>
            {action}
            <br/>
            {value}
        </div>
    )
}

type ERProps =  exchangeRate &{
    addToArchive: (action : {[key:string]: any}) => void
    cur: optionType
}

export const ExchangeRate: React.FC<ERProps> = ({buyValue, sellValue, cur, addToArchive }) => {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const [data, setData] = useState<{action:string, price: number, currency: string}>()

    const closeModal = () => {setModalIsOpen(false)}
    const openModal = (action?: string, price?: number):void => {
        if(action && price && cur) {
            setData({action, price, currency: cur.value})
        }
        setModalIsOpen(true)
    }

    return(
        <div className="exchangeRateContainer">
            <Modal addToArchive={addToArchive} data={data} closeModal={closeModal} visible={modalIsOpen}/>
            <CurrencyStatus handler={openModal} action="buy" value={buyValue}/>
            <CurrencyStatus handler={openModal} action="sell" value={sellValue}/>
        </div>
    )
}