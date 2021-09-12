import 'bootstrap/dist/css/bootstrap.css'

const Item = ({ product }) => {
    return <li align="left" className="list-group-item" key={product.id}>
        <table>
            <tr>
                <td align="left">
                    <img  width="50" height="50" src={`/assets/${product.id}.jpg`} />

                </td>
                <td align="left"> 
                    {`Artista: ${product.name} / Descripción: ${product.description}`}
                </td>
            </tr>
        </table>





    </li>
}
export default Item