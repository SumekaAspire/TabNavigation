import React,{use, useState} from 'react'

const useToggle = (initialValue=false) => {

    const [isToggle, setIsToggle]=useState(initialValue);
    const toggle= ()=>setIsToggle((prev)=>(!prev));

  return [isToggle, toggle]
}

export default useToggle


