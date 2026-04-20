import { useState  , useEffect } from "react"

const ProgressBar = ({value})=>{
    console.log(value)

    const [animatedProgress , setAnimatedProgress] = useState(0)

    useEffect(()=>{

        setTimeout(()=>{
            setAnimatedProgress(value)
        }, 100)

    }, [value])
    return (<div className="progress-container">
        <div className ="progress-bar" 
        style = {{
            // width: `${animatedProgress}%`,
            transform : `translateX(${animatedProgress- 100}%)`,
            }}
        role= "progressbar"
        aria-valuenow={animatedProgress}
        aria-valuemin="0"
        aria-valuemax="100"
        >
        {value}%
        </div>
    </div>

    )

}

export default ProgressBar;