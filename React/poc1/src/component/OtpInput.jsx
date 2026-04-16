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
/**
 * const handlePaste = (e) => {
  e.preventDefault();

  const pastedData = e.clipboardData
    .getData("text")
    .slice(0, OTP_INPUT)
    .split("");

  setInputArr((prev) =>
    prev.map((_, i) => pastedData[i] || "")
  );

  const nextIndex = Math.min(pastedData.length, OTP_INPUT - 1);
  inputRef.current[nextIndex]?.focus();
};


const handleKeyDown = (e, index) => {
  switch (e.key) {
    case "Backspace":
      if (inputArr[index] === "" && index > 0) {
        inputRef.current[index - 1]?.focus();
      }
      setInputArr(prev =>
        prev.map((item, i) => (i === index ? "" : item))
      );
      break;

    case "ArrowLeft":
      if (index > 0) {
        inputRef.current[index - 1]?.focus();
      }
      break;

    case "ArrowRight":
      if (index < OTP_INPUT - 1) {
        inputRef.current[index + 1]?.focus();
      }
      break;

    default:
      break;
  }
};
 */

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
