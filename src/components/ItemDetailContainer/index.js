import ItemDetail from "../ItemDetail"
import { useEffect, useState } from "react"
import './styles.css'

const products = [
    { id: 1, name: 'Pugliese', description: 'Magia', stock: 12, price: 1700 },
    { id: 2, name: 'Troilo', description: 'Aventura', stock: 10, price: 1340 },
    { id: 3, name: 'Darienzo', description: 'Rock & Roll', stock: 15, price: 1500 },
    { id: 4, name: 'Di Sarli', description: 'Soñar', stock: 20, price: 1250 },
]

function getProductDetail(itemId) {
    return new Promise((resolve, reject) => {
        const product = products.find(item => item.id === itemId)
        setTimeout(() => resolve(product), 2000)
    })
}

const ItemDetailContainer = ({itemId}) => {

    const [productDetail, setProductDetail] = useState("")

    useEffect(() => {
        
        const product = getProductDetail(itemId)
        product.then(product => {
            setProductDetail(product)
        })

    },[itemId])

    return (
        <div className='ItemDetailContainer' >
            <ItemDetail product={productDetail} />
        </div>
    )
}
export default ItemDetailContainer