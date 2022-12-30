import {createContext} from 'react'
import useFetch from "../hooks/useFetch";

export const StockContext = createContext();

export const StockContextProvider = ({children}) => {
    
    return (
        <StockContext.Provider value={{useFetch}}>
            {children}
        </StockContext.Provider>
    )
}


