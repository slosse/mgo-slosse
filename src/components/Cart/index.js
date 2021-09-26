import './styles.css'
import CartList from '../CartList'
import CartContext from "../../context/CartContext"
import { useContext } from 'react'

const Cart = () => {

    const { products, getTotal } = useContext(CartContext)

    return (
        <div className="Cart">
            <h1>Cart</h1>
            {products.length===0?"El carrito está vacío":<CartList products={products} total={getTotal()}/>}
            
        </div>
    )
}
export default Cart