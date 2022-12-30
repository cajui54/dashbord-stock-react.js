import {useState, useEffect} from 'react'

const useFetch = (url) => {
    const [datas, setData] = useState(null);

    useEffect(() => {
        const httpsRequest = async () => {
            
            const response = await fetch(url);

            const dataJson = await response.json();

            setData(dataJson);
        }
        httpsRequest();
    },[url]);

  return {datas}
}

export default useFetch
