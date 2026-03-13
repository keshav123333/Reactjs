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