import 'bootstrap/dist/css/bootstrap.css'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'

const CartItem = ({ product }) => {

    const { removeItem, addItem } = useContext(CartContext)

    return (

        <tr>
            <td>{`${product.name}`}</td>
            <td>{`$${product.price}`}</td>
            <td>{`${product.quantity}`}</td>
            <td>{`$${product.quantity*product.price}`}</td>
            <td><button onClick={() => removeItem(product.id)} type="button" class="btn btn-link">Eliminar</button></td>
        </tr>



            )
}

            export default CartItem