import React, { useState } from 'react'
import {
    CButton,
    CModal,
    CModalHeader,
    CModalBody,
    CModalFooter,
    CModalTitle,
    CContainer,
    CRow,
    CCol,
    CFormInput} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'

interface props {
    visible: boolean
    closeModal: () => void
    data?: {action:string, currency: string, price: number}
    addToArchive: (action : {[key:string]: any}) => void
}

export const Modal:React.FC<props> = ({visible, closeModal, data, addToArchive}) => {
    const [inputValue, setInputValue] = useState<string>("")
    return (
        <>
            <CModal alignment="center" visible={visible} onClose={closeModal}>
                <CModalHeader>
                    <CModalTitle>Make order</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    <CContainer>
                        <CRow xs={{cols: 'auto'}}>
                            <CCol>{data?.action.toLocaleUpperCase()}</CCol>
                            <CCol>{data?.price}</CCol>
                            <CCol>{data?.currency}</CCol>
                        </CRow>
                        <br/>
                        <CRow xs={{cols: 'auto'}} className="">
                            <CCol>Volume</CCol>
                            <CCol>
                                <CFormInput
                                    value={inputValue}
                                    onChange={(event) => {setInputValue(event.target.value)}} size="sm" type="number"/>
                            </CCol>
                        </CRow>
                    </CContainer>
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={closeModal}>
                        Cancel
                    </CButton>
                    <CButton
                        onClick={() => {addToArchive({
                        id: Date.now(),
                        side: data?.action,
                        price: data?.price,
                        instrument: data?.currency,
                        volume: inputValue,
                        timestamp: new Date().toLocaleString(),
                        _cellProps: { id: { scope: 'row' } }})
                            closeModal()
                        }}
                        color="primary">OK</CButton>
                </CModalFooter>
            </CModal>
        </>
    )
}