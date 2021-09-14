import {useState} from 'react'

const ItemCount = ({product})=> {

    const [quantity,setQuantity] = useState(0)
    const [alert,setAlert] = useState("")
    const stock=10

    const onAdd= ()=> {
        if(quantity>=stock) {
            setAlert("Se ha excedido el stock maximo")
            return
        }
        setQuantity(quantity+1)
        setAlert("")
    }

    const onRemove= ()=> {
        if(quantity<=0) {
            
            return
        }
        setQuantity(quantity-1)
        setAlert("")
        
    }

    const onAddtoCart = () =>{
        setQuantity(0)
        setAlert("")
    }


    
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
                <td align="center" colSpan="3"><button className="btn btn-primary" onClick={()=>onAddtoCart()}>Agregar al carrito</button></td>
            </tr>

            </tbody>
        </table>
        {alert !=="" ? <p style={{color:'red'}}>{alert} </p> :"" }
       
        </div>
    )

}
export default ItemCount