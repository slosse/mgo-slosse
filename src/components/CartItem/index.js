import 'bootstrap/dist/css/bootstrap.css'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'

const CartItem = ({ product }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <>
            <td>{`${product.name}`}</td>
            <td>{`$${product.price}`}</td>
            <td>{`${product.quantity}`}</td>
            <td><button onClick={() => removeItem(product.id)} type="button" class="btn btn-link">Eliminar</button></td>
        </>



            )
}

            export default CartItem