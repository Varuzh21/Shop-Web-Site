import React from "react"

export type ButtonType = {
    title: string,
    type: 'button' | 'submit',
    className?: string,
    onClick?: (e: React.MouseEvent<HTMLElement>) => void,
}

export type InputType = {
    type: 'text' | 'password',
    placeholder: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
}