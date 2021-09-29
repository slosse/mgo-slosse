import './styles.css'
import CartList from '../CartList'
import CartContext from "../../context/CartContext"
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
    
    const { products, getTotal } = useContext(CartContext)

    const finPurchase = () => {
        const cart = {buyer: {name: 'Enrique', phone: '1169999845', email: 'enriqueslosse@gmail.com' },
            items: products, total: getTotal() }
    } 

    return (
        <div className="Cart">
            <h1>Mi compra</h1>
            {products.length===0?"El carrito está vacío":<CartList />}
            <Link to={`/finPurchase`} >
                    <button className="btn btn-primary" >Finalizar la compra</button>
            </Link>
        </div>
    )
}
export default Cart