import React from 'react'
import { Header, Footer } from '@/components'

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default layout;