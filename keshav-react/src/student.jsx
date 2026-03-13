import PropTypes from 'prop-types'

function Student(props){
    
 const list=props.items
  
 const cat=props.category

 const list_print=list.map((item)=>{return <li key={item.id}> {item.name} = <b>{item.calorie}</b> </li>})

return (
   <>
    <h2>{cat}</h2>
    <ol className='list'>{list_print}</ol>
   </>
   
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

