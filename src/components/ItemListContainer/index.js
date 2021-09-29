import { useState, useEffect } from 'react'
import ItemList from '../ItemList'
import './styles.css'
import { getDocs, collection, query, where } from '@firebase/firestore'
import { db } from '../../services/firebase'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const { categoryid } = useParams()
    const [loading, setLoading] = useState(undefined)

    useEffect(() => {
        setLoading(true)
        let vCategory = categoryid
        let field = 'category'
        let operator = '=='

        if (!categoryid) {
            getDocs(collection(db, 'products')).then(querySnapshot => {
                const listProducts = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(listProducts)
            }).catch((error) => {
                console.log('Error searching intems', error)
            }).finally(() => {
                setLoading(false)
            })
        } else {

            getDocs(query(collection(db, 'products'), where('category', '==', categoryid))).then((querySnapshot) => {
                const listProducts = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(listProducts)
            }).catch((error) => {
                console.log('Error searching intems', error)
            }).finally(() => {
                setLoading(false)
            })
        }

        return (() => {
            setProducts([])
            //setLoading(true)
        })

    }, [categoryid])


    return (
        <div className="ItemListContainer" >
            {loading ? "Loading.." : <ItemList products={products} categoryid={categoryid} />}
        </div>
    )

}

export default ItemListContainer