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
                    authorization: `Bearer ${jwt}`
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
        const localToken = window.localStorage.getItem("holder");
        if (localToken) {
          verifyToken(localToken);
        }
      }, []);

      
    /* useEffect(() => {
        console.log(user)
    }, [user])
 */
    useEffect(() => {
        if (token) {
            window.localStorage.setItem("holder", token);
            setIsAuthenticated(true);
            // console.log(isAuthenticated);
          }
        }, [token]);

       /*  const localToken = window.localStorage.getItem("holder");
        console.log("LOCAL TOKEN: ", localToken)
        verifyToken(localToken);
    }, []) */


    return (
        <SessionContext.Provider value={{setToken, token, isAuthenticated, setIsAuthenticated, isLoading, user, setUser}} >{children}</SessionContext.Provider>
    )
}

export default SessionContextProvider;