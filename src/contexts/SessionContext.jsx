import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { baseURL } from "../apiURLs";

export const SessionContext = createContext(); 

const SessionContextProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    
    const verifyToken = async (jwt) => {
        console.log("JWT: ", jwt);
        try {
            const response = await axios.post(`${baseURL.production}/auth/verify`, undefined, {
                headers: {
                    authorization: `Bearer ${jwt}`
                },
            })
            setToken(jwt);
            setUser(response.data)
            setIsLoading(false);

        } catch (error) {
            console.log("Error authenticating bearer: ", error);
            window.localStorage.removeItem("bearer");
        }
    }
    useEffect(() => {
        const localToken = window.localStorage.getItem("bearer");
        if (localToken) {
          verifyToken(localToken);
        }
      }, []);

    useEffect(() => {
        if (token) {
            window.localStorage.setItem("bearer", token);
            setIsAuthenticated(true);
          }
        }, [token]);

    return (
        <SessionContext.Provider value={{setToken, token, isAuthenticated, setIsAuthenticated, isLoading, user, setUser}} >{children}</SessionContext.Provider>
    )
}

export default SessionContextProvider;