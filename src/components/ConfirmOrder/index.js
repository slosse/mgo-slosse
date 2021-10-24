import { useContext, useEffect, useState } from 'react'
import CartContext from "../../context/CartContext"
import UserContext from '../../context/UserContext'
import { saveOrder } from '../../services/firebase'
import { useHistory } from 'react-router-dom'

const ConfirmOrder = () => {

    const { products, getTotal, emptyCart, getQuantity, contact } = useContext(CartContext)
    const {user} = useContext(UserContext)
    const [processingOrder, setProcessingOrder] = useState(false)
    const history = useHistory()

    const confirmOrder = () => {
        setProcessingOrder(true)

        const objOrder = {
            buyer: user,
            contact: contact,
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
        if(getQuantity()>0) {

            confirmOrder()
        } else {
            history.goBack()
        }
        return (() => {
        })
    },[])// eslint-disable-line react-hooks/exhaustive-deps

    return (<>
            <h3>Confirmación de Pedido</h3>
            {processingOrder?"Procesando..":"Su orden ha sido procesada"}
        </>
    )
    
    
}

export default ConfirmOrder