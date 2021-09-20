import { Link } from 'react-router-dom'

const ItemCount = ({quantity,onAdd,onRemove,onaddtoCart})=> {

    return(
        <div align="center">
            
        <table >
        <tbody>
            <tr>
                <td align="left"><button className="btn btn-primary" onClick={()=>onRemove() }>-</button></td>
                <td align="center">{quantity}</td>
                <td align="right"><button className="btn btn-primary" onClick={()=>onAdd() }>+</button></td>
            </tr>
            <tr>
                <td align="center" colSpan="3">
                    <Link to={`/cart`} >
                        <button className="btn btn-primary" onClick={e =>onaddtoCart(e)}>Agregar al carrito</button>
                    </Link>
                </td>
            </tr>

            </tbody>
        </table>

        </div>
    )

}
export default ItemCount