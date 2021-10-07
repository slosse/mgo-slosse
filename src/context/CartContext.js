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
            
        } 

        const newItem = [{ 'id': id, 'price': price, 'name': name, 'quantity': newQuantity }]
        const newProducts = [...vProducts, ...newItem]
        setProducts(newProducts)

    }


    const removeItem = (id) => {
        const newProducts = products.filter(element => element.id !== id)
        setProducts(newProducts)
    }

    const emptyCart = () => {
        setProducts([])
    }
    
    const isInCart = (id) => {
        products.forEach(element => {
            if (element.id === id) return true
        })
        return false
    }

    const getProductById = (id) => {
        products.forEach(element => {
            if (element.id === id) return element
        })
        return false
    }

    const getTotal = () => {
        var total=0
        products.forEach(element => {
            total = total +element.price * element.quantity
        })
        return total
    }

    const getQuantity = () => {
        var count=0
        products.forEach(element => {
            count = count +element.quantity
        })
        return count
    }

    return (
        <Context.Provider value={{products,addItem, removeItem, emptyCart, isInCart, getQuantity, getTotal, getProductById}}>
            {children}
        </Context.Provider>

    )
}

export default Context
