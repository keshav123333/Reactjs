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
            
         funclist
        
        
        )
        
        
        }
        
        export default Student

Aisa kuch output ayega 

<img width="301" height="146" alt="image" src="https://github.com/user-attachments/assets/3911f3d2-7ca4-43fc-b5d9-acd819e909de" />




