import { useContext, useEffect, useState } from 'react'
import CartContext from "../../context/CartContext"
import UserContext from '../../context/UserContext'
import { saveOrder } from '../../services/firebase'
import { useHistory } from 'react-router-dom'

const ConfirmOrder = () => {

    const { products, getTotal, emptyCart, getQuantity } = useContext(CartContext)
    const {user} = useContext(UserContext)
    const [processingOrder, setProcessingOrder] = useState(false)
    const history = useHistory()

    const confirmOrder = () => {
        setProcessingOrder(true)

        const objOrder = {
            buyer: user,
            items: products,
            total: getTotal() 
        }

        saveOrder(objOrder).then(()=> {
            emptyCart()

        }).catch((error) => {
            console.log('Error saving order', error)
        }).finally(() => {
            setProcessingOrder(false)
        })

    }
    
    useEffect(() => {
        console.log("getQuantity "+getQuantity())
        if(getQuantity()>0) {

            confirmOrder()
        } else {
            history.goBack()
        }
        return (() => {
        })
    },[])

    return (<>
            <h3>Confirmación de Pedido</h3>
            {processingOrder?"Procesando..":"Su orden ha sido procesada"}
        </>
    )
    
    
}

export default ConfirmOrder