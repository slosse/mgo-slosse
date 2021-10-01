import "./styles.css"
import CartList from '../CartList'
import CartContext from "../../context/CartContext"
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
    
    const { products } = useContext(CartContext)
    
    return (
        <div className="Cart">
            <h1>Mi compra</h1>
            {products.length===0 &&
                "El carrito está vacío"
            }
            {products.length>0 &&
                <>
                    <CartList />
                    <Link to={`/confirmOrder`} >
                        <button className="btn btn-primary">Finalizar la compra</button>
                    </Link>
                </>
            }


        </div>
    )
}
export default Cart