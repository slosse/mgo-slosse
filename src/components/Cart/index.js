import { useContext } from 'react'
import CartContext from '../../context/CartContext'

const Cart = () => {
    const {products} = useContext(CartContext)
    console.log("products.length: "+products.length)
    return <div>
        <h1>Cart</h1>

            {products.map(product =><p key={product.id}>
                {product.name +" "+product.price+" "+product.quantity}
                
                </p>)}


    </div>
}
export default Cart