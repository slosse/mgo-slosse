import './styles.css'
import CartList from '../CartList'
import CartContext from "../../context/CartContext"
import { useContext } from 'react'

const Cart = () => {

    const { products } = useContext(CartContext)

    return (
        <div className="Cart">
            <h1>Cart</h1>
            {products.length===0?"El carrito está vacío":<CartList products={products}/>}
            
        </div>
    )
}
export default Cart