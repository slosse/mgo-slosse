import {useEffect, useState} from 'react'

const ItemCount = ()=> {

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

    useEffect(()=>{
        console.log("despues del primer renderizado")
        return () =>{

            console.log("antes de desmontar el componente")
        }
    
    },[])
    
    return(
        <div>
            
        <table >
        <tbody>
            <tr>
                <td align="center" colSpan="3">Camisa</td>
            </tr>
            <tr>
                <td align="left"><button onClick={()=>onRemove() }>-</button></td>
                <td align="center">{quantity}</td>
                <td align="right"><button onClick={()=>onAdd() }>+</button></td>
            </tr>
            <tr>
                <td align="center" colSpan="3"><button onClick={()=>setQuantity(0)}>Agregar al carrito</button></td>
            </tr>
            <tr>
                <td align="center" colSpan="3"> {alert !="" ? <h3 style={{color:'red'}}>alert </h3> :"" }</td>
            </tr>
            </tbody>
        </table>
       
        </div>
    )

}
export default ItemCount