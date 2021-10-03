import { useContext, useEffect, useState } from 'react'
import CartContext from "../../context/CartContext"
import { Timestamp } from '@firebase/firestore'
import UserContext from '../../context/UserContext'
import { addDoc, collection } from '@firebase/firestore'
import { db } from '../../services/firebase'
import { getDoc, doc, writeBatch } from '@firebase/firestore'
import { useHistory } from 'react-router-dom'

const ConfirmOrder = () => {

    const { products, getTotal, emptyCart } = useContext(CartContext)
    const {user} = useContext(UserContext)
    const [processingOrder, setProcessingOrder] = useState(false)
    const history = useHistory()

    const confirmOrder = () => {
        setProcessingOrder(true)

        const objOrder = {
            buyer: user,
            items: products,
            total: getTotal() ,
            date: Timestamp.fromDate(new Date())
        }
                    
        const batch = writeBatch(db)
        const outOfStock = []
        console.log(objOrder)
        
        objOrder.items.forEach((prod, i) => {
            getDoc(doc(db, 'products', prod.id)).then(DocumentSnapshot => {
                if(DocumentSnapshot.data().stock >= objOrder.items[i].quantity) {
                    batch.update(doc(db, 'products', DocumentSnapshot.id), {
                        stock: DocumentSnapshot.data().stock - objOrder.items[i].quantity
                    })
                } else {
                    outOfStock.push({...DocumentSnapshot.data(), id: DocumentSnapshot.id})
                }
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), objOrder).then(() => {
                batch.commit().then(() => {
                    //setNotification('success', 'La orden se ejecuto con exito')
                })
            }).catch((error) => {
                //setNotification('error','Error al ejecutar la orden')
            }).finally(() => {
                setProcessingOrder(false)
                emptyCart()
                //setTotal(0)
            })
        }
    }
    
    useEffect(() => {
        if(products) {
            confirmOrder()
        } else {
            console.log("BACK")
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