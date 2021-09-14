import ItemDetail from '../ItemDetail'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import './styles.css'
import { getProductById } from '../products'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const {itemid} = useParams()
    
    useEffect(() => {
        
        getProductById(itemid).then(result => {
            setProduct(result)
            setLoading(false)
            }
        )

        return (() => {
            setProduct(undefined)
        }
        )

    },[itemid])

    return (
        <div className='ItemDetailContainer' >
            {loading?"Loading..":<ItemDetail product={product} />}    
        </div>
    )
}
export default ItemDetailContainer