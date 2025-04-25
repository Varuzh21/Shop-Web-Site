"use client"

import { useEffect, useState } from 'react';
import { getSingleProduct } from '@/services/index';
import { ProductInterface } from '@/models';
import { Button } from '@/components'
import './mainfirstItem.css'

const MainFirstItem = () => {
    const [product, setProduct] = useState<ProductInterface>()

    useEffect(() => {
        (async () => {
            const data = await getSingleProduct(82);
            setProduct(data);
        })();
    }, [])

    console.log(product);

    return (
        <div className='main-first-item'>
            <div className='container'>
                <div className='row'>
                    <div className='main-first-item-left'>
                        <h1 className='main-first-item-title'>{product?.title}</h1>
                        <p className='main-first-item-description'>{product?.description}</p>

                        <Button type='button' title='Explore More' className='button'/>
                    </div>

                    <div className='main-first-item-right'>
                        <img 
                            src={product?.thumbnail}
                            alt={product?.title}
                            className='main-first-item-image'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainFirstItem