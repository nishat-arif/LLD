import React, { useRef, useState, useEffect } from 'react'
import { OTP_INPUT } from '../utils/constant';

function OtpInput() {

  const [inputArr, setInputArr] = useState(new Array(OTP_INPUT).fill(""));
  const inputRef = useRef([]);

  useEffect(()=>{
    inputRef.current[0].focus();
  }, [])

  const handleChange=(val, index)=>{
    if(isNaN(val)) return;
    let newVal = val.trim()
   setInputArr(prev =>prev.map((item, i) => (i === index ? newVal.slice(-1) : item)));
    newVal && inputRef.current[index + 1].focus();
  };

  const handleKeyPress =(e , index)=>{
    if (!e.target.value && e.key === "Backspace") {
      inputRef.current[index - 1]?.focus();
}

  }
  return (
    <div className="otpContainer">
      <h1>OTP Input</h1>
      <div className='otpInput'>
        {inputArr.map((input, index) => {
          return <input 
          className="otpInputBox" 
          key={index} 
          value={inputArr[index]} 
          onChange={(e)=>{handleChange(e.target.value , index)}}
          onKeyDown={(e)=>{handleKeyPress(e, index)}}
          ref={(el) => {inputRef.current[index] = el}} />
        }

        )}
          

      </div>
    </div>
  )
}

export default OtpInput;
