import ItemDetail from '../ItemDetail'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import './styles.css'
import {getDoc,doc } from '@firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const {itemid} = useParams()
    
    useEffect(() => {
        getDoc(doc(db, 'products' , itemid)).then((querySnapshot) => {
            if(querySnapshot.data()) {
                const dbProduct = { id: querySnapshot.id, ...querySnapshot.data()}
                setProduct(dbProduct)
            }
        }).catch((error) => {
            console.log('Error searching intems', error)
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