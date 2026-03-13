 

//  Use effect(function, dependencies)
// useEffect(() => {})  run affter every rerender tab rerender tab jab kuch bhi change click ya kuch bhi hota 
// useEffect(() => {}, [])  run only on mount  means jab hi run maan refresh so ek baar run bas ab samjh isse 
// useEffect(() => {}, [dependencies])  run on mount + jab dependies ki value change maan isme count so jab count hange tab bhi chalega 
import React,{useState,useEffect} from "react"


 function UseEffect(){
    const [color,setColor]=useState("red")
    // if ye khali so sirf ek baar change 
    //if [] isme count toh vo jitni baar count change utni baar update 
    useEffect(()=>{
        let but=document.querySelectorAll("button")
        let y=(t)=>{
            t.addEventListener("click",async ()=>{
                t.innerText="clicked me"
                let y= await setTimeout(() => {
                    t.innerText="Add"
                    
                }, 1000);
            })
        }
        but.forEach((e)=>{y(e)})
        
but.forEach((e)=>{
    e.removeEventListener("click",y)
    })
    },[])
    
    return(
        <div>
            <button >addd</button>
             <button >addd</button>
            <button >addd</button>

        </div>
    )

 }
export default UseEffect