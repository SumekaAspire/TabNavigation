import React,{useState, useEffect} from 'react'

const FetchDataAPI = () => {
    const[data, setData] =useState([]);
    const[loading, setLoading]=useState(true);

    useEffect(()=>{
        async function fetchData(){
        
            try{
             const response = await fetch('https://jsonplaceholder.typicode.com/posts');
             const result = await response.json();
             setData(result)

            }catch(error){
            console.log("Error"+ error);
            }finally{
             setLoading(false);
            }
        }

        fetchData();
    },[])

    if(loading){
        return<p>Loading..</p>
    }
  return (
    <div>
        <p>FetchDataAPI</p>
        <ul>
            {data.map((posts)=>{
            return<li key={posts.id}>{posts.title}</li>
            })}
        </ul>
    </div>
  )
}

export default FetchDataAPI


// import React, { useEffect, useState } from "react";
// import axios from 'axios';

// //https://jsonplaceholder.typicode.com/posts
// const FetchDataAPI = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState("true");

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//         setData(response.data);  
//       } catch (err){
//         console.log("error: "+ err);
//       }finally{
//         setLoading(false);
//       }
//     }
//     fetchData();

//   }, []);

//   if(loading){
//     return<p>Loading...</p>
//   }

  
//   return (
//     <div>
//       <p>Get Data from API using fetch/axios</p>
//       <ul>
//         {data.map((post) => 
//         <li key={post.id}>{post.title}</li>)}
//       </ul>

//     </div>
//   );
// };

// export default FetchDataAPI;
