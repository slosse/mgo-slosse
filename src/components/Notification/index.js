import { useContext } from "react"
import NotificationContext from "../../context/NotificationContext"

const Notification = () => {

    const {notification} = useContext(NotificationContext)
    
    return(
        <div style={{ height: '5vh', color: notification?.severity === 'error' && 'red' }}>
            {notification.message}
        </div>
    )
}

export default Notification