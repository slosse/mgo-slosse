import ItemDetail from '../ItemDetail'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import './styles.css'
import getProducts from '../products'

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const {itemid} = useParams()
    
    useEffect(() => {
        
        const products = getProducts()
        products.then(result => {
            const product = result.find(prod =>prod.id == itemid)
            setProductDetail(product)
            setLoading(false)
        })
        return (() => {
            setProductDetail(undefined)
        }
        )

    },[itemid])

    return (
        <div className='ItemDetailContainer' >
            {loading?"Loading..":<ItemDetail product={productDetail} />}    
        </div>
    )
}
export default ItemDetailContainer