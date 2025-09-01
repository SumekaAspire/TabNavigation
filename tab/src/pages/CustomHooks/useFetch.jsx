import React,{useState, useEffect}from 'react'
import axios from 'axios';

const useFetch = ({url}) => {

    const[loading, setLoading] = useState(true);
    const[data, setData]= useState([]);
    const[error, setError]=useState(null);

    useEffect(()=>{

        if(!url) return; // if url is empty/ null
        async function fetchData(){
            try{
                const response = await axios.get(url);
                setData(response.data);
            }catch(error){
               setError(error.message || 'Something went wrong')
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    },[url])
  return [data, loading, error];
}

export default useFetch;