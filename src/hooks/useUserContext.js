import {useContext} from 'react';
import { StockContext } from '../context/StockContext';


const useUserContext = () => {
    const contextDatas = useContext(StockContext);

    return contextDatas;
}

export default useUserContext
