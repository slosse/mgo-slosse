import ItemDetail from '../ItemDetail'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import './styles.css'
import { getDocumentById } from '../../services/firebase'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const {itemid} = useParams()
    
    useEffect(() => {
        getDocumentById('products',itemid).then(dbProduct => {
            setProduct(dbProduct)
        }).catch((error) => {
            console.log('Error searching products', error)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProduct(undefined)
        })

    },[itemid])

    if(!product && !loading) {
        return <h3>{`NO EXISTE EL PRODUCTO :(`} </h3>
    } 

    return (
        <div className='ItemDetailContainer' >
            {loading?"Loading..":<ItemDetail product={product} />}    
        </div>
    )
}
export default ItemDetailContainer