import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const SessionContext = createContext(); 

const SessionContextProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    
    const verifyToken = async (jwt) => {
        console.log("JWT: ", jwt);
        try {
            const response = await axios.post("http://localhost:5005/auth/verify", undefined, {
                headers: {
                    Authorization: `holder ${jwt}`
                },
            })
            setToken(jwt);
            setUser(response.data)
            setIsLoading(false);

        } catch (error) {
            console.log("Error authenticating holder: ", error);
            window.localStorage.removeItem("holder");
        }
    }
    useEffect(() => {
        console.log(user)
    }, [user])

    useEffect(() => {
        const localToken = window.localStorage.getItem("holder");
        console.log("LOCAL TOKEN: ", localToken)
        verifyToken(localToken);
    }, [])

    useEffect(() => {
        if (token) {
            window.localStorage.setItem("holder", token);
            if (!isAuthenticated) {
                setIsAuthenticated(true);
            }
        }
    }, [token])

    return (
        <SessionContext.Provider value={{setToken, token, isAuthenticated, isLoading, user}} >{children}</SessionContext.Provider>
    )
}

export default SessionContextProvider;