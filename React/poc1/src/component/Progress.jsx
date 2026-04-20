import ProgressBar from "./Progressbar"
import { inputsArr } from "../utils/constant";
import { useState } from "react";

const Progress = ()=>{

    const [arr, setArr] = useState(inputsArr)

    return (<div>
        {arr.map((val , index) => {
            return <ProgressBar key={index} value = {val}/>
            })}
        </div>)
}

export default Progress;