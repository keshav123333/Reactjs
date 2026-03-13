 import React ,{useEffect,useState} from "react"

function Digitalclock(){
    const [time,setTime]=useState(new Date())
    useEffect(()=>{
        const handle=setInterval(()=>{
            setTime(new Date())
        },1000)

        return()=>{
            clearInterval(handle)
        }
    },[])

    function gettime(){
        let hour=time.getHours()
        const minute=time.getMinutes()
        const seconds=time.getSeconds()
        const meridian= hour>12 ?"PM":"AM"
        hour=hour%12||12
        return `${getprop(hour)} : ${getprop(minute)} : ${getprop(seconds)} : ${getprop(meridian)}`

    }
    function getprop(text){
   return  text<10?"0"+text:text
    }



return (
    <div>
        <span>{gettime()}</span>

    </div>
)
}

export default Digitalclock