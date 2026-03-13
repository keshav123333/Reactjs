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