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
            selcted color is {color}
        </div>
        <label htmlFor=""> Choose a color:
        <input type="color" value={color} onChange={(e) => handleColor(e)} />
</label>
        </div>
    )
}


export default Colorpicker