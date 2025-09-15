import { useState } from "react"

export default function Counter() {

    // ekhane khub important ekta jinish, set hosce kono button e click korle seta 1 kore barate usestate name e ekta function react automatic diye dey niche tumi dekhte pasco useState() deyar sathe sathei opore import er maddome automatic {useState name e ekta function cole asce}

    let [count, setcount] = useState(0)
    const handleLog = ()=>{
        const newCount = count + 1;
        setcount(newCount)
    }
    
    const styles = {
        border: "2px solid yellow",
        padding:"20px"
    }

    return (
        <div style = {styles}>
        <h3>Count : {count} </h3>
        <button onClick={handleLog}>Add</button>
        </div>
    )
}