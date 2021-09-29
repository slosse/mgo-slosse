import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'

const Item = ({ product }) => {
    
    return (

        <li align="left" className="list-group-item" key={product.id}>

            <img width="50" height="50" src={`/assets/${product.img}.jpg`} alt={product.name}/>

            {`Artista: ${product?.name} | Categoria: ${product?.category} | `}
            
            <Link to={`/item/${product.id}`} >
                Comprar
            </Link>

        </li>
    )
}
export default Item