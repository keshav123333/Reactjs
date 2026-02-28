# Reactjs


for adding module.css check video


#props 

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

