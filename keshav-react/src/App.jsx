 
import Card from "./card.jsx"
 
import ComponentA from "./componentA.jsx"   
import UseRef from "./useref.jsx"
import StopWatch from "./stopwatch.jsx"
function App() {

   const fruits=[{id:1,name:"apple", calorie:50},{id:2,name:"banana",calorie:80},{id:3,name:"grapes",calorie:70}]
   const vegetables=[{id:1,name:"carrot", calorie:30},{id:2,name:"broccoli",calorie:40},{id:3,name:"spinach",calorie:20}]
   return (
    <>
    <Card />
 
  
 <StopWatch></StopWatch>

    </>
   )
}

export default App
