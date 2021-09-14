import { useState, useEffect} from 'react'
import ItemList from '../ItemList'
import './styles.css'
import getProducts from '../products'

const ItemListContainer = ()=> {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const list = getProducts()
        
        list.then(list => {
            setProducts(list)
        })

        return (() => {
            setProducts([])
        }
        )
    }, [])


    return (
        <div className="ItemListContainer" >
             {products.length===0?"Loading..":<ItemList products={products}/>}
        </div>



    )    
    
}

export default ItemListContainer