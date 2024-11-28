import React from 'react'
import { ButtonType } from '@/models'

const Button = ({title, type, className, onClick}: ButtonType) => {
    return (
        <button 
            type={type}
            className={`${className} button`}
            onClick={onClick}
        >
            {title}
        </button>
    )
}

export default Button