import { createContext, useState } from 'react'

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
   
    var BreakException = {}

    const addItem = (id, price, name, quantity) => {

        var newQuantity = quantity
        var vProducts = [...products]
        try {
            products.forEach(element => {
                if (element.id === id) {

                    if (element.quantity + quantity < 0) {
                        return
                    }
                    const oldQuantity = element.quantity

                    vProducts = vProducts.filter(element => element.id !== id)
                    newQuantity = oldQuantity + quantity
                    throw BreakException

                }
            })


        } catch (e) {
            if (e !== BreakException) throw e;
            console.log("EXCEPTION")

        } 

        const newItem = [{ 'id': id, 'price': price, 'name': name, 'quantity': newQuantity }]
        const newProducts = [...vProducts, ...newItem]
        const myJSON = JSON.stringify(newProducts)

        setProducts(newProducts)

    }


    const removeItem = (id) => {
        const newProducts = products.filter(element => element.id !== id)
        setProducts(newProducts)
    }

    const clear = () => {
        setProducts([])
    }

    const isInCart = (id) => {
        products.forEach(element => {
            if (element.id === id) return true
        })
        return false
    }

    const getQuantity = () => {
        var count=0
        products.forEach(element => {
            count = count +element.quantity
        })
        return count
    }

    return (
        <Context.Provider value={{products,addItem, removeItem, clear, isInCart, getQuantity}}>
            {children}
        </Context.Provider>

    )
}

export default Context
