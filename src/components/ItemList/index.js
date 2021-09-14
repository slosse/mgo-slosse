import Item from "../Item"
import 'bootstrap/dist/css/bootstrap.css'

const ItemList = ({products,categoryid}) => {

    if(products.length===0) {
        return <h3>{`NO HAY PRODUCTOS PARA LA CATEGORIA ${categoryid} :(`} </h3>
    } 

     return (
        <ul className="list-group">
            {products.map(product =><Item product={product} key={product.id}/>)}
        </ul>
    )
}
export default ItemList