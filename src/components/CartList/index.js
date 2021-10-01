
import CartItem from "../CartItem"
import 'bootstrap/dist/css/bootstrap.css'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'



const CartList = () => {

    const { emptyCart, getQuantity, products, getTotal } = useContext(CartContext)

    return (

        <table className="table">
            <thead>
                <tr >
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Importe</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {products.map(product =>

                    <CartItem product={product} key={product.id} />

                )}
            </tbody>

            <tfoot>
            <tr>
                <td>Total</td>
                <td></td>
                <td>{getQuantity()}</td>
                <td>$ {getTotal()}</td>
                <td><button onClick={() => emptyCart()} type="button" className="btn btn-link">Vaciar</button></td>
                </tr>
            </tfoot>
        </table>

    )
}
export default CartList

