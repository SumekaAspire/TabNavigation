


import React from 'react'
import useToggle from './customhooks/useToggle'

const Button = () => {
    const[isOn, setIsOn]= useToggle(false);
    const buttonStyle={
        backgroundColor:isOn?'green':'red'
    }
  return (
    <div>
    <button style={buttonStyle}onClick={setIsOn}>{isOn?"ON":"OFF"}</button>
    </div>
  )
}

export default Button

