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