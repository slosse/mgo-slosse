
import CartItem from "../CartItem"
import 'bootstrap/dist/css/bootstrap.css'
import { useContext } from "react"
import CartContext from "../../context/CartContext"

const CartList = () => {

    const { products } = useContext(CartContext)

    return (
        <ul className="list-group">
            {products.map(product =>
                <CartItem product={product} />
            )}
        </ul>
    )
}
export default CartList

