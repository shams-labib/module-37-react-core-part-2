import { useState } from "react"

export default function batsman(){
    const [runs, setRuns] = useState(0);

    const singleHandlers = ()=> {
        const result = runs + 1;
        setRuns(result)
    }


    const fourHandlers = ()=> {
        const result = runs + 4;
        setRuns(result)
    }

    const sixHandlers = () => {
        const result = runs + 6;
        setRuns(result)
    }
   return(
     <div>
        <h3>Player : Bangladesh Batsman</h3>
        <h2>Score : {runs}</h2>
        <button onClick={singleHandlers}>Singles</button>
        <button onClick={fourHandlers}>Four</button>
        <button onClick={sixHandlers}>Six</button>
    </div>
   )
}