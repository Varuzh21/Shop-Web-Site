export interface ProductInterface {
    availabilityStatus:string;
    brand:string
    category:string
    description:string
    dimensions:{ 
        width: number,
        height: number,
        depth: number
    }
    discountPercentage:number;
    id:number
    images:[
        string
    ];
    meta:{
        createdAt: string,
        updatedAt: string,
        barcode: string,
        qrCode: string
    }
    minimumOrderQuantity:number
    price:number
    rating:number
    returnPolicy:string
    shippingInformation:string
    sku:string
    stock:string
    tags:[
        string
    ]
    thumbnail:string
    title:string
    warrantyInformation:string
    weight:number
}