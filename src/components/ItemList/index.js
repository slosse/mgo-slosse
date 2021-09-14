import Item from "../Item"
import 'bootstrap/dist/css/bootstrap.css'

const ItemList = ({products}) => {

    if(products.length==0) {
        return <h3>NO HAY PRODUCTOS PARA LA CATEGORIA ELEGIDA </h3>
    } 

     return (
        <ul className="list-group">
            {products.map(product =><Item product={product} key={product.id}/>)}
        </ul>
    )
}
export default ItemList