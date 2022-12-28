import { useContext} from 'react';
import { StockContext } from '../context/StockContext';

const useRequest = () => {
   
   const context = useContext(StockContext);

   if(!context) console.log('Não há contexto!');

   return context;
}

export default useRequest
