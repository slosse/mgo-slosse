import { useState, useEffect} from 'react'
import ItemList from '../ItemList'
import './styles.css'

const products = [
    { id: 1, name: 'Pugliese', description: 'Magia', stock: 12 },
    { id: 2, name: 'Troilo', description: 'Aventura', stock: 10 },
    { id: 3, name: 'Darienzo', description: 'Rock & Roll', stock: 15 },
    { id: 4, name: 'Di Sarli', description: 'Soñar', stock: 20 },
]

function getList() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 2000)
    })
}

const ItemListContainer = ()=> {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const list = getList()

        list.then(list => {
            setProducts(list)
        })

    }, [])

    return (
        <div className="ItemListContainer" >
            <ItemList products={products}/>
        </div>
    )    
    
}

export default ItemListContainer