import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

export const Header: React.FC = () => {
    return (
        <div className="HeaderContainer">
            <Link to="/trading"> Trading </Link>
            <Link to="/archive"> Archive </Link>
        </div>
    )
}