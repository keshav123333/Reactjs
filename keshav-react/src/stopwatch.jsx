import React ,{useState,useEffect,useRef} from "react";
import { use } from "react";

function StopWatch(){
const [isRunning,setRunning]=useState(false)
const [currtime,setcurr]=useState(0);
const starttime=useRef(0)
const intid=useRef(null)

useEffect(()=>{
if(isRunning){
    intid.current=setInterval(()=>{
    let curr=Date.now()-starttime.current
    setcurr(curr)

    },10)

}

return ()=>{
    clearInterval(intid.current)
}
},[isRunning])

function start(){
    setRunning(true)
    starttime.current=Date.now()
}
function stop(){
    setRunning(false)
}

function reset(){
    setcurr(0)
    setRunning(false)

}



function format(){
    let minutes = Math.floor((currtime / (1000 * 60)) % 60);
    let seconds = Math.floor((currtime / 1000) % 60);
    let milliseconds = Math.floor((currtime % 1000) / 10);
    minutes=String(minutes).padStart(2,"0")
    seconds=String(seconds).padStart(2,"0")
    milliseconds=String(milliseconds).padStart(2,"0")


    return `${minutes}:${seconds}.${milliseconds}`
}

return (
    <div>
        <p>{format()}</p>
<button onClick={start}>start</button>
<button onClick={stop}>stop</button>
<button onClick={reset}>reset</button>
    </div>
)


}

export default StopWatch