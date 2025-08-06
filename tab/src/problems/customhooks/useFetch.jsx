import React,{useEffect, useState} from 'react'
import axios from 'axios';


//fetch data from api
const useFetch = () => {
    const[data, setData]= useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=> {

        async function fetchData(){
            try{
            const response = await axios.get(url);
            setData(response.data)
            }catch(error){
                console.log("Error: "+error)
            }finally{
                setLoading(false);
            }
        }

        fetchData();
    },[])

  return []
}

export default useFetch