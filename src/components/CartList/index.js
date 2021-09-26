
import CartItem from "../CartItem"
import 'bootstrap/dist/css/bootstrap.css'


const CartList = ({ products }) => {

    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col"></th>
                </tr>

            </thead>
            <tbody>
                {products.map(product =>
                    <tr>
                        <CartItem product={product} />
                    </tr>
                )}
            </tbody>
                
            <tr>

                    <tr colspan='4'>Total</tr>
                </tr>
        </table>
    )
}
export default CartList

