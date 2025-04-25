import React from 'react'
import { ButtonType } from '@/models'

const Button = ({title, type, onClick}: ButtonType) => {
    return (
        <button 
            type={type}
            className={`button`}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default Button