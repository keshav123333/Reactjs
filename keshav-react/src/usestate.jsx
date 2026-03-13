import React,{useState} from "react";

function UseState() {

const [newtask,setnew]=useState("")
const [tasklist,setlist]=useState([])

function addtask(){
  if(newtask.trim()!=""){
    setlist((t)=>{return [...t,newtask]})
    console.log(newtask)
    console.log(tasklist)
    setnew("")
  }
}
function handleinputchange(e){
  setnew(e.target.value)
}

function itemdelete(index){
  const newlist=tasklist.filter((_,i)=>i!=index)  //yaha pe maine dekh _ use ele bhi le sakta uski jagah
  setlist(newlist)
}

// ISS CODE MEIN DETRUCTRING KAR RAHA THA TOH BUG ERRROR AA RAHA 
// function moveup(index){
// if(index>0){
// const newlist=[...tasklist]
// [newlist[index],newlist[index-1]]=[newlist[index-1],newlist[index]]
// setlist(newlist)
// }}
// function movedown(index){
// if(index<tasklist.length-1){
// const newlist=[...tasklist]
// [newlist[index],newlist[index+1]]=[newlist[index+1],newlist[index]]  //destructuring important hai dekh 
// setlist(newlist)
// }

// }
function moveup(index){
  if(index > 0){
    const newlist = [...tasklist]

    const temp = newlist[index]
    newlist[index] = newlist[index-1]
    newlist[index-1] = temp
// YE MORE SAFE HAI 
    setlist(newlist)
  }
}
function movedown(index){
  if(index < tasklist.length - 1){
    const newlist = [...tasklist]

    const temp = newlist[index]
    newlist[index] = newlist[index+1]
    newlist[index+1] = temp

    setlist(newlist)
  }
}

 

return(
 <div className="todo-container"> 
  <div className="input-list">
  <input type="text" value={newtask}  onChange={(e)=> handleinputchange(e)} placeholder="ENTER THE TASK....   " />
  <button onClick={addtask}><span>ADD</span></button>
  </div>

<ul>
  {tasklist.map((ele,index)=>
   { return <li key={index}><span>{ele}</span> 
   <button onClick={()=>itemdelete(index)}>Delete</button>
   <button onClick={()=>moveup(index)}>UP</button>
   <button onClick={()=>movedown(index)}>DOWN</button>
   </li>
    }

  )}
</ul>


 </div>
)
}

export default UseState