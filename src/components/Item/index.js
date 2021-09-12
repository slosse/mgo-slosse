import 'bootstrap/dist/css/bootstrap.css'

const Item = ({ product }) => {
    return (

        <li align="left" className="list-group-item" key={product.id}>

            <img width="50" height="50" src={`/assets/${product.id}.jpg`} />

            {`Artista: ${product.name} / Descripción: ${product.description}`}

        </li>
    )
}
export default Item