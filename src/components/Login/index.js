import "./styles.css"
import UserContext from '../../context/UserContext'
import { useContext, useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import { useHistory } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider  } from "firebase/auth";

const Login = () => {
    const { login } = useContext(UserContext)
    const history = useHistory()

    const auth = getAuth();
    
    const handleLogin = (provider) => {

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user.displayName;
                login(user)
                history.goBack()
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                console.log(error.message)
                const credential = GoogleAuthProvider.credentialFromError(error);
            })

    }


    return (
        <div className="Login">
            <h3>Login</h3>
            <table>
                <tbody>
                     <tr>
                        <td >
                            <button className="btn btn-primary" onClick={() => handleLogin(new GoogleAuthProvider())}>Ingresar con Gmail</button>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <button className="btn btn-primary" onClick={() => handleLogin(new FacebookAuthProvider())}>Ingresar con Facebook</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Login



