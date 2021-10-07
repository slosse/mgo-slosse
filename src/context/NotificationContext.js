import { createContext, useState } from 'react'
export const Context = createContext('')

export const NotificationContextProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState('')

    const setNotification = ( message, severity) => {
        setMessage(message)
        setSeverity(severity)
        setTimeout(() => {
            setMessage('')
        }, 3000)
    }

    return (
        <Context.Provider 
            value={{
               notification: {
                   message,
                   severity
               },
               setNotification
            }}
        >
            {children}
        </Context.Provider>
    )
}

export default Context