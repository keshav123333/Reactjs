
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