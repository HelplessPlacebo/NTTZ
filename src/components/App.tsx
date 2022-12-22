import React, { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { CTable } from '@coreui/react';
import { Trading } from './trading'
import { Header } from './Header'
import { TIMER_START_VALUE } from '../common/constants'

const mock = {
    columns: [
        {
            key: 'side',
            label: 'Side',
            _props: { scope: 'col' },
        },
        {
            key: 'price',
            label: 'Price',
            _props: { scope: 'col' },
        },
        {
            key: 'instrument',
            label: 'Instrument',
            _props: { scope: 'col' },
        },
        {
            key: 'volume',
            label: 'Volume',
            _props: { scope: 'col' },
        },
        {
            key: 'timestamp',
            label: 'Timestamp',
            _props: { scope: 'col' },
        }
    ],
    items: [
        {
            id: 1,
            side: "sell",
            price: '1.554',
            instrument: 'USD/RUB',
            volume: '3000000',
            timestamp: new Date().toLocaleString(),
            _cellProps: { id: { scope: 'row' } },
        },
        {
            id: 2,
            side: "buy",
            price: '1.123',
            instrument: 'EUR/USD',
            volume: '25522201',
            timestamp: new Date().toLocaleString(),
            _cellProps: { id: { scope: 'row' } },
        },
        {
            id: 3,
            side: "sell",
            price: '1.4882',
            instrument: 'TRY/CNY',
            volume: '1000000',
            timestamp: new Date().toLocaleString(),
            _cellProps: { id: { scope: 'row' } },
        }
    ]
}


export const App: React.FC = () => {
    const [items, setItems] = useState<{[key:string]:any}[] >(mock.items)
    const addToArchive = (data: {[key:string]: any}) => {
        setItems(items.concat(data))
    }
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Navigate to="/trading"/>}/>
                <Route path="/trading" element={<Trading addToArchive={addToArchive} from={Date.now() + TIMER_START_VALUE}/>}/>
                <Route path="/archive" element={<CTable columns={mock.columns} items={items}/>}/>
            </Routes>
        </>
    )
}