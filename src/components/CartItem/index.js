import 'bootstrap/dist/css/bootstrap.css'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'

const CartItem = ({ product }) => {

    const { removeItem } = useContext(CartContext)

    return (
        <li align="center" className="list-group-item" key={product.id}>
            {product.name}
            $ {product.price}
             Cantidad: {product.quantity}
            <button onClick={() => removeItem(product.id)} type="button" class="btn btn-link">Eliminar</button>
        </li>
    )
}

export default CartItem