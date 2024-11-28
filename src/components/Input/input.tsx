import React from 'react'
import { User, ChevronRight} from 'lucide-react';
import { InputType } from '@/models';
import './input.css'

const input = ({type, placeholder, onChange}: InputType) => {
    return (
        <div className="input-container">
            <User color='#fff'/>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className="input-field"
            />
            <ChevronRight color='#fff'/>
        </div>
    )
}

export default input