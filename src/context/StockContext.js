import {createContext, useState, useEffect} from 'react'

export const StockContext = createContext();

export const StockContextProvider = ({children}) => {
    const url = 'http://localhost:3000/users';
    const [users, setUser] = useState(null);

    useEffect(() => {
        const httpsRequest = async () => {
            const response = await fetch(url);

            const datasUsers = await response.json();

            setUser(datasUsers);
        }
        httpsRequest();
    },[url]);
    
    return (
        <StockContext.Provider value={{users, setUser}}>
            {children}
        </StockContext.Provider>
    )
}


