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






//for getting 50+ data
// import { useState, useEffect, useCallback, useMemo } from "react";
// import axios from "axios";

// const useFetch = ({ url }) => {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);

//   const fetchData = useCallback(async () => {
//     if (!url) return;
//     setLoading(true);
//     try {
//       const response = await axios.get(url);
//       setData(response.data);
//       setError(null);
//     } catch (err) {
//       setError(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   }, [url]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   const totalItems = useMemo(() => {
//     if (!data?.products) return 0;
//     return data.products.length;
//   }, [data]);

//   return [data, loading, error, totalItems, fetchData];
// };

// export default useFetch;
