import { useState, useEffect } from 'react'
import ItemList from '../ItemList'
import './styles.css'
import { getCollection } from '../../services/firebase'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const { categoryid } = useParams()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getCollection('products','category','==',categoryid).then(products => {
            setProducts(products)
        }).catch((error) => {
            console.log('Error searching products', error)
        }).finally(() => {
            setLoading(false)
        })

        return (() => {
            setProducts([])
        })

    }, [categoryid])


    return (
        <div className="ItemListContainer" >
            {loading ? "Loading.." : <ItemList products={products} categoryid={categoryid} />}
        </div>
    )

}

export default ItemListContainer