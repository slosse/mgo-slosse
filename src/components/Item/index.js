import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'

const Item = ({ product }) => {
    
    return (

        <li align="left" className="list-group-item" key={product.id}>

            <img width="50" height="50" src={`/assets/${product.id}.jpg`} />

            {`Artista: ${product?.name} / Descripción: ${product?.description}`}
            
            <NavLink to={`/product/${product?.id}`} >
                Comprar
            </NavLink>

        </li>
    )
}
export default Item