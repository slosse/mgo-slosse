import 'bootstrap/dist/css/bootstrap.css'
import ItemCount from '../ItemCount'
import Cart from '../Cart'
import { useState } from 'react'
import { getStockByProduct } from '../products'

const ItemDetail = ({ product,itemid }) => {

    const [quantity,setQuantity] = useState(0)
    const [stock,setStock] = useState(product.stock)
    const [nostock,setNostock] = useState(false)
    const [loading,setLoading] = useState(false)
    
    const onAdd= ()=> {
        setLoading(true)
        getStockByProduct(product.id).then(stock=> {
            
            setStock(stock)
            if(quantity<=stock) {
                setNostock(false)
            }
            
            if(quantity>=stock) {
                setLoading(false)
                setNostock(true)
                return
            }
            setLoading(false)
            setQuantity(quantity+1)
            setNostock(false)
        })
    }

    const onRemove= ()=> {
        if(quantity<=0) {
            return
        }
        setQuantity(quantity-1)
        setNostock(false)
        
    }

    const onaddtoCart = (e) =>{
        if(quantity===0) {
            e.preventDefault();
        }
    }

    if(product===undefined) {
        return <h3>{`NO EXISTE EL PRODUCTO ${itemid} :(`}</h3>
    } 
    
    return (

        <div className="card"  style={{width: '18rem'}}>
            <img className="card-img-top" src={`/assets/${product.id}.jpg`} alt={product?.name}/>
            <div className="card-body">
                <h5 className="card-title">{product?.name}</h5>
                <p className="card-text">{product?.category}</p>
                <h2 className="card-title">${product?.price}</h2>
            </div>
            {`Stock actual: ${stock-quantity}`}
            <ItemCount onAdd={onAdd} onRemove={onRemove} onaddtoCart={onaddtoCart} product={product} quantity={quantity} stock={stock} nostock={nostock} loading={loading}  />
            {nostock && !loading? <p style={{color:'red'}}>Se ha alcanzado el stock maximo</p> :"" }
            {loading ? <p>Estamos verificando stock..</p> :"" }
        </div>

    )
}
export default ItemDetail