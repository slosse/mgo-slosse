import Item from "../Item"
import 'bootstrap/dist/css/bootstrap.css'

const ItemList = ({products}) => {

     return (
        <ul className="list-group">
            {products.map(product =><Item product={product} key={product.id}/>)}
        </ul>
    )
}
export default ItemList