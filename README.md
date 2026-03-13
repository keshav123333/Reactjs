# Reactjs


for adding module.css check video


# Props 

    function Student(props){
    return (
    <div>
        <p>
            Name: {props.name}
           <p> Age : {props.age}</p>
            istrue: {props.istrue?"if ye true toh yes":"false" }
        </p>
    </div>
    
    )
    
    
    }
    
    export default Student


  ye app.jsx 

       
    import Card from "./card.jsx"
    import Student  from "./student.jsx"   
     
    function App() {
       return (
        <>
        <Card />
        <Student name="keshav" age={20} istrue={true}/>   yaha props bheja vo student ko mila but most imp thing i string "" no. {} isme jayega 
        </>
       )
    }
    
    export default App
->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


iska advance jisme proptypes bas ye jo name and age inka type define for better

    import PropTypes from 'prop-types'
    
    function Student(props){
    return (
    <div>
        <p>
            Name: {props.name}
           <p> Age : {props.age}</p>
            istrue: {props.istrue?"if ye true toh yes":"false" }
            <p>{props.list}</p>
        </p>
    </div>
    
    )
    
    
    }
    Student.propTypes={
        name:PropTypes.string,
        age:PropTypes.number,
    
    }
    
    Student.defaultProps={
        name:"keshav",          #ye default use maan le if app side se kuch ni aaya props m toh kya 
        age:20,
        istrue:true,
        list:["re"," ",21]
    }
    
    export default Student



## 3. how to add condtional css
app.jsx file
   
        import Card from "./card.jsx"
        import Student  from "./student.jsx"   
         
        function App() {
           return (
            <>
            <Card />
            <Student name="keshav" age={20} istrue={true} list={["re"," ",21]}/>
            </>
           )
        }
        
        export default App

   index.css

       .sucess{
          background-color: green;
        }


student.jsx

    import PropTypes from 'prop-types'
    
    function Student(props){
    return (
     
    <h2 className= {props.istrue?"sucess":"failure"}>{props.name}</h2>
    
    )
    
    
    }
    Student.propTypes={
        name:PropTypes.string,
        age:PropTypes.number,
    
    }
    
    Student.defaultProps={
        name:"keshav",
        age:20,
        istrue:true,
        list:["re"," ",21]
    }
    
    export default Student

Same app.jsx and index.css but yaha pe like dekh maan pura ek function hi pass karna toh 

    import PropTypes from 'prop-types'
    
    function Student(props){
    return (
     
    <div >
    
    {props.istrue ? <h1 className='sucess'>Welcome {props.name}</h1> : <h1>Failure</h1>}
    
    **#most impt { } ye lagana iske andar ho raha hai sab **
    
    </div>
    
    )
    
    
    }
    Student.propTypes={
        name:PropTypes.string,
        age:PropTypes.number,
    
    }
    
    Student.defaultProps={
        name:"keshav",
        age:20,
        istrue:true,
        list:["re"," ",21]
    }
    
    export default Student
    
same cheez aise const bana ke bhi 

    import PropTypes from 'prop-types'
    
    function Student(props){
        const welcomeMsg=<h1 className='sucess'>Welcome {props.name}</h1>
        const failure=<h1>Failure</h1>
    return (
     
    <div >
    
    {props.istrue ? welcomeMsg : failure}
    
    </div>
    
    )
    
    
    }
    Student.propTypes={
        name:PropTypes.string,
        age:PropTypes.number,
    
    }
    
    Student.defaultProps={
        name:"keshav",
        age:20,
        istrue:true,
        list:["re"," ",21]
    }
    
    export default Student

## 4. render list

so sun maan le tere pas ek list ab tujheusko list ke fomat m print on screen so ye use kar 

        import PropTypes from 'prop-types'
        
        function Student(props){
            const list=["apple","banana","orange"]
            const funclist=list.map((list)=>{return <li>{list}</li>})
        return (
            
         <ul>{functlist}</ul>
        
        
        )
        
        
        }
        
        export default Student

Aisa kuch output ayega 

<img width="301" height="146" alt="image" src="https://github.com/user-attachments/assets/3911f3d2-7ca4-43fc-b5d9-acd819e909de" />



## 5. render list mein hi if compotnent bana le toh 

        import PropTypes from 'prop-types'
        
        function Student(props){
            const list=[ {id:1,name:"keshav",calorie:50},
                {id:2,name:"kumar",calorie:100},
                {id:3,name:"singh",calorie:400} ]    
            const funclist=list.map((list)=>{return <li key={list.id}>{list.name} -: <b>{list.calorie}</b></li>}) // yaha pe maine key use ki vo humesha
        // unique hona chahiye taki react ko pata chale ki konsa element change hua hai aur konsa nahi hua hai
        
        // list.sort((a,b)=> a.name.localeCompare(b.name))//sort in ascending order
        // list.sort((a,b)=> b.name.localeCompare(a.name))//sort in descending order
        // list.sort((a,b)=> a.calorie - b.calorie)//sort in ascending order
        
        // filter use
        const list_low_calorie=list.filter((item)=>{return item.calorie<100})
         
        
        const funclist_low_calorie=list_low_calorie.map((list)=>{return <li key={list.id}>{list.name} -: <b>{list.calorie}</b></li>})
        
        return (
            <ol>{funclist_low_calorie}</ol>
        )
        
        
        }



#6.same cheez bas tum ab alag alag cheeze behj sakte 

App.jsx
 
    import Card from "./card.jsx"
    import Student  from "./student.jsx"   
     
    function App() {
    
       const fruits=[{id:1,name:"apple", calorie:50},{id:2,name:"banana",calorie:80},{id:3,name:"grapes",calorie:70}]
       const vegetables=[{id:1,name:"carrot", calorie:30},{id:2,name:"broccoli",calorie:40},{id:3,name:"spinach",calorie:20}]
       return (
        <>
        <Card />
       {/* so if len of component is 0 hen dont tender */}
       {fruits.length>0?<Student items={fruits} category="Fruits" />:null}
        
        {vegetables.length>0?<Student items={vegetables} category="Vegetables" />:null}
        </>
       )
    }
    
    export default App


Student.jsx ye hai 

    import PropTypes from 'prop-types'
    
    function Student(props){
        
     const list=props.items
     print(list)
     const cat=props.category
    
     const list_print=list.map((item)=>{return <li key={item.id}> {item.name} = <b>{item.calorie}</b> </li>})
    
    return (
       <>
        <h2>{cat}</h2>
        <ol className='list'>{list_print}</ol>
       </>
       
    )
    
    
    }
     
    export default Student

OUTPUT

<img width="184" height="232" alt="image" src="https://github.com/user-attachments/assets/1c1ebebd-c745-47f4-ad7f-85b9c081c92c" />



# CLICK EVENTS

basic click

app.jsx
 
    import Card from "./card.jsx"
    import Student  from "./student.jsx" 
    import Click from "./click.jsx"    
     
    function App() {
    
       const fruits=[{id:1,name:"apple", calorie:50},{id:2,name:"banana",calorie:80},{id:3,name:"grapes",calorie:70}]
       const vegetables=[{id:1,name:"carrot", calorie:30},{id:2,name:"broccoli",calorie:40},{id:3,name:"spinach",calorie:20}]
       return (
        <>
        <Card />
       {/* so if len of component is 0 hen dont tender */}
       {fruits.length>0?<Student items={fruits} category="Fruits" />:null}
        
        {vegetables.length>0?<Student items={vegetables} category="Vegetables" />:null}
    
          <Click />
        </>
       )
    }
    
    export default App


click.jsx

    function Click(){
        var count=0
    
    const handleClick=(name)=>{
        if(count<5){
        console.log("hey",name,"you have clicked ",count," times")
    count++
    }
    else{
        console.log("you have clicked more than 5 times")
        count++
    }
    }
    
    
    return (
        <button onClick={()=>{handleClick("yo")}}>Click me</button>
    )
    }
    export default Click;
        

Advance isme e event isme jo click hua uski sari info hoti so bahut kuch kar sakta tu usse chatgpt pe padh kya kya kar sakte hai isse 

iss buttonko click kiya toh red and clicked likha aaya 

    function Click(){
        var count=0
    
    const handleClick=(e)=>{
      e.target.style.backgroundColor="red"
      e.target.innerText="Clicked"
    }
    
    
    return (
        <button onClick={(e)=>{handleClick(e)}}>Click me</button>
    )
    }
    export default Click;



# USE STATES

1. SAMJH LIKE MAAN EK NAME NAAM KE VARIABLE HAI AB JAB VO RETURN HAI LIKE VO SCREEN PE PRINT HO RAHA AB TU CHATA JAISE BUTTON CLICK THAT NAME CHANGE SO EVEN IF TU USS NAME VAR JO REUTRN SE UPAR DECLARE USSE CHANGE PAR VO SCREEN PE CHANGE NI HOGA SO ISLIYE DOM USE STATE USE KARTE HAR VARIBALE KO DECLARE KARNE KE LIYE JISSE USKE SATH EK USKA SETTER BHI JATA JISSE JAB BHI CALL VO APKE ELEMENT KO CHAGE KAR DEGA ON SCREEN BHI

usestate.jsx

 
    import React,{useState} from "react";
    
    
    
    function UseState() {
    const [name,setName]=useState("keshav")
    const [count,setCount]=useState(0)
    
    const handlename=()=>{
        setName("kumar")
    }
    const handlecount=()=>{
        setCount(count+1)
    }
    
    return(
        <>
        <h2>MY NAME : {name}</h2>
       
        <button onClick={handlename}>Change Name</button>
        <hr />
         <p>Count: {count}</p>
        <button onClick={handlecount}>Increment Count</button>
    
        
        </>
    )
    
    
    
    }
    
    export default UseState
    
<img width="268" height="187" alt="image" src="https://github.com/user-attachments/assets/4c25f957-2abf-4786-b08d-6befb624536c" />


ek chota sa counter

 css 
 
         .container{
          text-align: center;
        }
        .display{
          font-weight: 800;
          font-size:5rem;
          color:red;
        }
        .container .btn{
          padding: 10px 20px;
          font-size: 1.5rem;
          background-color: blue;
          color: white;
          border: black solid 2px;
          cursor: pointer;
        }
        
use state.jsx
        
    import React,{useState} from "react";
    
    
    
    function UseState() {
     
    const [count,setCount]=useState(0)
    
     
    
    return(
    
       <div className="container">
        <p className="display">
            {count}
        </p>
        <button className="btn" onClick={()=>setCount(count+1)}>+</button>
        <button className="btn" onClick={()=>setCount(count-1)}>-</button>
    <button className="btn" onClick={()=>setCount(0)}>Reset</button>
       </div>
        
    )
    
    
    
    }
    
    export default UseState



use state more 

 
        import React,{useState} from "react";
        
        
        
        function UseState() {
         
         const [name,setName]=useState("keshav")
         const[description,setDescription]=useState("type the description")
         const [shipping,setshipping]=useState("")
        const handleName=(e)=>{
            setName(e.target.value)
        }
        
        const handleDes=(e)=>{
                setDescription(e.target.value)
        }
        const handleShipping=(e)=>{
              setshipping(e.target.value)
        }
        return(
        
           <div className="container"> 
             <input type="text" value={name} onChange={(e)=>handleName(e)}/>
             <p>Name: {name}</p>
        <input type="text" value={description} onChange={(e)=>handleDes(e)} />
        <p>Description: {description}</p>
        #isme niche onchange aise iss check ko check onchange trigger and pickup ho jayegi value and tabhi checked wala shipping ko check karte rahega like shipping ==pickup tabhi check
        #jaise tune dilevery wale button ko dabaya ye uncheck as ab checked == delivery 
        
        <label >
           <input type="radio" value="pickup" checked={shipping === "pickup"} onChange={handleShipping} />
           Pickup
        </label>
        <label >
           <input type="radio" value="delivery" checked={shipping === "delivery"} onChange={handleShipping} />
           Delivery
        </label>
        
        <p>{shipping}</p>
        
           </div>
            
        )
        
        
        
        }
        
        export default UseState

# Color picker using use state 

    import React,{useState} from "react"
    
    function Colorpicker(){
        const [color,setColor]=React.useState("red")
        const handleColor=(e)=>{
            setColor(e.target.value)
        }
        return (
            <div className="colorpicker-container">
            <h2>Color Picker</h2>
            <div style={{backgroundColor:color}}> 
            #isme like jab stryle toh {{}} double bracket ke andar hota hai style humesha 
                selcted color is {color}
            </div>
            <label htmlFor=""> Choose a color:
            <input type="color" value={color} onChange={(e) => handleColor(e)} />
    </label>
            </div>
        )
    }
    
    
    export default Colorpicker


# Updater function 

 
    import React,{useState} from "react";
    
    
    
    function UseState() {
     
    const [count,setCount]=useState(0)
    function handleIncrement(){
    setCount(count+1)
    setCount(count+1)
    {niche dekh}
    }
    return(
          <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
          </div>
    )
    
    
    
    }
    
    export default UseState


     #yaha pe dekh maine count ko do baar +1 so jabincrement wala button click toh +2 hona chaiye but ni +1 one hi as reat sare uso lega and 
    setCount(0+1)
    setCount(0+1)
    so dono mein dekh 0 intially jayega and chahe kitne cout laga le vo in sabko ek sath so sirf ek hi baar hogi increment 
    maan le aise 
        function handleIncrement(){
    setCount(count+1)
    setCount(count+2)
    
    } so count =0 but last mein count +2 so 0+2 abki baar sirf do ka increment if ye hi func 

     function handleIncrement(){
    setCount(count+2)
    setCount(count+1)
    toh 0+2 then count ki value 0+1 so funal value 1 hi hogi na ki 2 problem  
    
    }


#iss problem ko solve updater function isse normal func call m bhi use karo as ye professional way

 
    import React,{useState} from "react";
    
    // update function like 
    
    function UseState() {
     
    const [count,setCount]=useState(0)
    function handleIncrement(){
    setCount(c => c+1)  // dono tarike se kar sakta hai tu liye wala more easy and aise hi karte hai mainly isme c is the previous value of count (0) and hum c+1 (1)return karte then 
    // niche wale func mein c+1 wali value jati 1 and ab niche (c) ye c 1 and return 1+2 so 3 final value hogi c ki 
    setCount((c) => {return c+2})
    
    }
    function handleReset(){
       setCount(c => c=0)
    }
    return(
          <div>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
          </div>
    )
    
    
    
    }
    
    export default UseState


# Object change 

 
    import React,{useState} from "react";
    
    // update function like 
    
    function UseState() {
     
    const [car,setCar]=useState({
       name:"BMW",
       model:"X5",
       year:2020
    })
    const handlename=(e)=>{
    setCar(c=> {return {...c,name:e.target.value}})
    // so yaha ...c ne baki sari value as it is rahi sirf name change ho gaya so c prev value thi usme se sari 
    // value aayi then name naya chala gaya and ye nayi dict ab car mein save
     
    }
    const handlemodel=(e)=>{
       setCar(c=> {return {...c,model:e.target.value}})}
    const handleyear=(e)=>{
       setCar(c=> {return {...c,year:e.target.value}})}
    return(
          <div>
    <h2>Car Details</h2>
    <p>Name: {car.name}</p>
    <p>Model: {car.model}</p>
    <p>Year: {car.year}</p>
    <input type="text" value={car.name} onChange={(e)=>handlename(e)} />
    <input type="text" value={car.model} onChange={(e)=>handlemodel(e)} />
    <input type="number" value={car.year} onChange={(e)=>handleyear(e)} />
          </div>
    )
    
    
    
    }
    
    export default UseState

    <img width="550" height="190" alt="image" src="https://github.com/user-attachments/assets/c65fba12-19ad-4513-b0b1-f228e607bfba" />




# Add array

 ye code errror isme dekh main cheez samjh isme addelmnt m like maine foods m inp.value dali but niche inp.value="" so as vo pura func ek baar mein hota so jab nich empt string hui toh uoar food m bhi emoty string gayi as inp
 
        import React,{useState} from "react";
        
       
        
        function UseState() {
           const [foods,setFood]=useState(["APPLE","banane","gauava"])
        
        
         const remove=(index)=>{
            setFood((f)=>f.filter(
              (element,i)=> i!=index
            ))  // so yaha pe ye list wala isse index bhejega jisko ye lega but ye usse
           //  filter karne m use like set food f jo pehle ka usko check uske har ek eemt and index check if vo index uske alawa toh filter 
         }
         const addelmnt=()=>{
          const inp=document.querySelector("#add");
          setFood((f)=>[...f,value])
           
          inp.value="" 
         }
        return(
        <div>
        <ul>
           {/* index yaha har uska index cal kar lega  */}
           {foods.map((food,index)=>
              <li key={index} onClick={(e)=>remove(index)}>{food}</li>
           )}
        
        </ul>
        
        <input type="text" id="add" />
        <button onClick={addelmnt}>ADD</button>
        
        </div>
        
        )
        
        }
        
        export default UseState


but ye kaam kar raha isme humne pehle inp ki value store so even if change hui inp ki value baad mein koi dikkat ni as var. declare ek baar m static use state ki tarah dynamic ni ki inp ki vaue baad m change toh vo bhi baad ka wait and inp ke sath change 


 
        import React,{useState} from "react";
        
 
        
        function UseState() {
           const [foods,setFood]=useState(["APPLE","banane","gauava"])
        
        
         const remove=(index)=>{
            setFood((f)=>f.filter(
              (element,i)=> i!=index
            ))  // so yaha pe ye list wala isse index bhejega jisko ye lega but ye usse
           //  filter karne m use like set food f jo pehle ka usko check uske har ek eemt and index check if vo index uske alawa toh filter 
         }
         const addelmnt=()=>{
          const inp=document.querySelector("#add");
          // save kar li value
          const op=inp.value
          setFood((f)=>[...f,op])
           
          inp.value="" 
         }
        return(
        <div>
        <ul>
           {/* index yaha har uska index cal kar lega  */}
           {foods.map((food,index)=>
              <li key={index} onClick={(e)=>remove(index)}>{food}</li>
           )}
        #jaise hi list pe click vo delete ho jayegi
        </ul>
        
        <input type="text" id="add" />
        <button onClick={addelmnt}>ADD</button>
        
        </div>
        
        )
        
        }
        
        export default UseState

# Use dict and Array 


        import React,{useState} from "react";

        function UseState() {
        
        const [carName,setName] = useState("");
        const [carYear,setYear] = useState("");
        const [carModel,setModel] = useState("");
        const [carDb,setDb] = useState([]);
        
        const handleName = (e)=>{
         setName(e.target.value)
        }
        
        const handleYear = (e)=>{
         setYear(e.target.value)
        }
        
        const handleModel = (e)=>{
         setModel(e.target.value)
        }
        
        const handledb = ()=>{
         setDb(db => [...db,{
           name:carName,
           year:carYear,
           model:carModel
         }])
        }
        
        const removeCar = (index)=>{
         setDb(c => c.filter((ele,i)=> i !== index))
        }
        
        return(
        <div>
        
        <ul>
        {carDb.map((ele,index)=> 
        <li key={index} onClick={()=>removeCar(index)}>
        {ele.name}, {ele.year}, {ele.model}
        </li>
        )}
        </ul>
        
        <input type="text" value={carName} placeholder="Name" onChange={handleName} />
        <p></p>
        
        <input type="text" value={carModel} placeholder="Model" onChange={handleModel} />
        <p></p>
        
        <input type="date" value={carYear} onChange={handleYear} />
        
        <button onClick={handledb}>ADD</button>
        
        </div>
        )
        }
        
        export default UseState


<img width="222" height="178" alt="image" src="https://github.com/user-attachments/assets/ba76163f-ba72-480f-b40b-dda51892f073" />


#IMPORTANT FUNC CALL KE LIYE 

💡 React ka rule yaad rakh

Situation	Syntax
simple function call	onClick={addtask}
parameter bhejna	onClick={()=>deleteTask(i)}



# to do list

        import React, { useState } from "react";
        
        function UseState() {
        
        const [newtask, setnew] = useState("");
        const [tasklist, setlist] = useState([]);
        
        function addtask() {
          if (newtask.trim() !== "") {
            setlist(t => [...t, newtask]);
            setnew("");
          }
        }
        
        function handleinputchange(e) {
          setnew(e.target.value);
        }
        
        function itemdelete(index) {
          const newlist = tasklist.filter((_, i) => i !== index);
          setlist(newlist);
        }
           // function UseEffect(){
        //     function moveup(index){
        //  if(index > 0){
        //    const newlist = [...tasklist]
        
        //    [newlist[index], newlist[index-1]] =
        //    [newlist[index-1], newlist[index]]
        
        //    setlist(newlist)
        //  }
        // }
        
        // function movedown(index){
        //  if(index < tasklist.length-1){
        //    const newlist = [...tasklist]
        
        //    [newlist[index], newlist[index+1]] =
        //    [newlist[index+1], newlist[index]]
        
        //    setlist(newlist)
        //  }
        // }
    

        
        
        function moveup(index) {
          if (index > 0) {
        
            const newlist = [...tasklist];
        
            let temp = newlist[index];
            newlist[index] = newlist[index - 1];
            newlist[index - 1] = temp;
        
            setlist(newlist);
          }
        }
        
        function movedown(index) {
          if (index < tasklist.length - 1) {
        
            const newlist = [...tasklist];
        
            let temp = newlist[index];
            newlist[index] = newlist[index + 1];
            newlist[index + 1] = temp;
        
            setlist(newlist);
          }
        }
        
        return (
        <div className="todo-container">
        
        <input
        type="text"
        value={newtask}
        onChange={handleinputchange}
        placeholder="ENTER THE TASK..."
        />
        
        <button onClick={addtask}>ADD</button>
        
        <ul>
        {tasklist.map((ele, index) => (
        <li key={index}>
        <span>{ele}</span>
        
        <button onClick={() => itemdelete(index)}>Delete</button>
        <button onClick={() => moveup(index)}>UP</button>
        <button onClick={() => movedown(index)}>DOWN</button>
        
        </li>
        ))}
        </ul>
        
        </div>
        );
        }
        
        export default UseState;


# USE Effect 
iske liye u can use code 

1️⃣ Example: Count with useEffect
    
    Ye dikhata hai ki dependency change hone par effect run hota hai.
    
    import React, { useState, useEffect } from "react";
    
    function Counter() {
    
    const [count, setCount] = useState(0);
    
    useEffect(() => {
     console.log("Count changed:", count);
    }, [count]);   // run on mount + when count changes
    
    return (
    <div>
    <h2>Count: {count}</h2>
    
    <button onClick={() => setCount(count + 1)}>
    Increment
    </button>
    
    </div>
    );
    
    }
    
    export default Counter;

2️⃣ Example: addEventListener + cleanup

Ye real use case hai jahan useEffect use hota hai.

    import React, { useEffect } from "react";
    
    function MouseTracker() {
    
    useEffect(() => {
    
    function handleMove(e) {
     console.log("Mouse X:", e.clientX);
    }
    
    window.addEventListener("mousemove", handleMove);
    
    // cleanup function
    return () => {
     window.removeEventListener("mousemove", handleMove);
    };
    
    }, []);
    
    return (
    <h2>Move your mouse and check console</h2>
    );
    
    }

export default MouseTracker;
Ye cleanup kyon zaroori hai

Agar remove nahi karoge:

component mount
↓
event listener add

component unmount
↓
listener still active
↓
memory leak

Isliye:



sun meri baat jaise ki maine samjh ki use effect kaam kaise karta so maan le like set inteval use effect ke bahar banaya maine toh har jab rerender tab ek bnaya setinetval ban jata so problem hoti hai hai so like use effect m daal de and [] dependencies de de isse jab ek baar run hota ek setinterval banta start m then ab koi ni banega ab maan le jase devce unmount ye setinterval hat jayega so ek hi setinteval har rerender pe rahega isse mostly inn kamo ke liye as ek wndow m ek hi bane ye tph acha hai 
API call

Timer (setInterval)

Event listeners

DOM manipulation

Digitl clock 

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




# USE CONTEXT 

ab maan ek case jsme box ke andar box ja raha hai so uske liye maine maan le 
pehle props comp b then usse niche ki taraf pass on karta gaya 

app.jsx
 
        import Card from "./card.jsx"
         
        import ComponentA from "./componentA.jsx"   
         
        function App() {
        
           const fruits=[{id:1,name:"apple", calorie:50},{id:2,name:"banana",calorie:80},{id:3,name:"grapes",calorie:70}]
           const vegetables=[{id:1,name:"carrot", calorie:30},{id:2,name:"broccoli",calorie:40},{id:3,name:"spinach",calorie:20}]
           return (
            <>
            <Card />
         
         <ComponentA></ComponentA>
        
          
            </>
           )
        }
        
        export default App


component a

        import ComponentB from "./componentB";
        import React ,{useState,createContext} from "react"
        export const UserContext=createContext()
        function ComponentA() {
            const [name,setName]=useState("keshav")
            return (
                <div className="box">
                    <h1>Component A</h1>
                    <h2> HII {name}</h2>
                    <UserContext.Provider value={name}>
                        <ComponentB user={name} />
                    </UserContext.Provider>   // so yaha se niche ki side pe ye name user ontext gaya abbuse kar sakte hai 
                </div>
            );
        }
        export default ComponentA

component b

    import ComponentC from "./componentc";
    
    function ComponentB() {
        return (
            <div className="box">
                <h1>Component B</h1>
                <ComponentC />
            </div>
        )
    }
    
    export default ComponentB;

component c

        import ComponentD from "./componentD";
        
        function ComponentC() {
            return (
                <div className="box">
                    <h1>Component C</h1>
                    <ComponentD />
                </div>
            );
        }
        export default ComponentC

component D

        import React ,{useState,createContext,useContext} from "react"
        import { UserContext } from "./componentA.jsx"
        
        function ComponentD() {
            const name = useContext(UserContext);
            return (
                <div className="box">
                    <h1>Component D</h1>
                    <h2> HII {name}</h2>
                </div>
            );
        }
        export default ComponentD

# Use Ref


jab hum use state use and usse like kuch change hota usme toh toh pura doc rerender hota 
isse samjhne ke liye iska video deh sakta brocode ka use useref wala part m hai detail m 

so use ref se bante so even ye change pura doc rerender ni hota 

aise kuch

        import React, {useRef} from "react";
        
        function UseRef() {
            const ref = useRef(null);
        
            const handleClick = () => {
                console.log(ref.current); // Access the DOM element
                 
            }
            return (
                <div>
                     <button onClick={handleClick} >
                        Click me
                     </button>
                </div>
            );
        }
        
        export default UseRef;
             
        
**and isse use to like isse use toh handle dom elemtn too**

        import React, {useRef} from "react";
        
        function UseRef() {
            const ref = useRef(null);
        
            const handleClick = () => {
                console.log(ref.current); // Access the DOM element
                 
            }
            const changecolor=()=>{
                ref.current.style.backgroundColor="red"
            }
        
        
            return (
                <div>
                     <button onClick={handleClick} >
                        Click me
                     </button>
        
                     <button onClick={changecolor} ref={ref}>
                        Change Color
                     </button>
         
                </div>
            );
        }
        
        export default UseRef;



# important 
sun jaise maine ye code likha isme like console.log rendered ek baar likha and fir time chount ko bdata but rerender ni sirf ek baar hi rendered print 

tabhi use state use karte so jab count change window fir rerender hoti hai jisse change dikhate hai but rerender kabhi kabhi problem ho sakti hai vo dekh lena like event listner laga diya bahr toh event listner ke andar naye listner bante jaynge 

    import React, {useRef} from "react";
    
    function UseRef() {
        const ref = useRef(null);
    
        const handleClick = () => {
            console.log(ref.current); // Access the DOM element
             
        }
        const changecolor=()=>{
            ref.current.style.backgroundColor="red"
        }
    
    let count=0
        setInterval(()=>{
            count++
            console.log(count)
        },1000)
        console.log("rendered")
        return (
            <div>
                 <button onClick={handleClick} >
                    Click me
                 </button>
    
                 <button onClick={changecolor} ref={ref}>
                    Change Color
                 </button>
     
            </div>
        );
    }
    
    export default UseRef;



# Stopwatch 
isme most important thing yaha pe ye ki jab running change so purana interval remove hoga then hi jake likenaya interval ke liye check karga so isrunning true so state chage so use effect bhi rerender and ek intervl bana degi jo update karta rahega curr time and jaise hi isrunning false so vapis rerender hoga par pehle pehle wala interval remove hoga then naya bana vo check kya isrunning true ni so dont run koi interval bana ni so remove bhi ni 

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
