import 'bootstrap/dist/css/bootstrap.css'
import ItemCount from '../ItemCount'

const ItemDetail = ({ product }) => {
    
    return (

        <div className="card"  style={{width: '18rem'}}>
            <img className="card-img-top" src={`/assets/${product.id}.jpg`} alt={product.name}/>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <h2 className="card-title">${product.price}</h2>
            </div>
            <ItemCount product={product}/>
        </div>

    )
}
export default ItemDetail