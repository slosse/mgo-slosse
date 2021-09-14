import { useState, useEffect} from 'react'
import ItemList from '../ItemList'
import './styles.css'
import { getProducts } from '../products'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({categories})=> {

    const [products, setProducts] = useState([])
    const {category} = useParams()
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const list = getProducts(category)
        list.then(list => {
            setProducts(list)
            setLoading(false)
        })

        return (() => {
            setProducts([])
            setLoading(true)
        }
        )

    }, [category])


    return (
        <div className="ItemListContainer" >
             {loading?"Loading..":<ItemList products={products}/>}
        </div>
    )    
    
}

export default ItemListContainer