import { createContext, useState } from 'react'
export const Context = createContext('')


export const UserContextProvider = ({children}) => {
    const [user,setUser] = useState('')
  
    const login = (user) => {
        console.log("Usuario logueado "+user)
        setUser(user)
    }

    const logout = () => {
        setUser('')
        return
    }
    
    return (
        <Context.Provider value={{user,login,logout}}>
            {children}
        </Context.Provider>
    )

}

export default Context