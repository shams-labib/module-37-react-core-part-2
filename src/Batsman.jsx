// ekhone amra ekhane muloto main jinish USESTATE() HOOK bisoye jante jasci, niche tari example deya


import { useState } from "react"

export default function batsman(){
    const [runs, setRuns] = useState(0);
    const [sixes, setsixes] = useState(0)

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
        
        const updateSixes = sixes + 1;
        setsixes(updateSixes)
        setRuns(result)
    }
   return(
     <div>
        <h3>Player : Bangladesh Batsman</h3>
        <p><small>Six : {sixes}</small></p>
        {
        runs > 50 && <p>Your Score: 50+ </p>
        }
        <h2>Score : {runs}</h2>
        <button onClick={singleHandlers}>Singles</button>
        <button onClick={fourHandlers}>Four</button>
        <button onClick={sixHandlers}>Six</button>
    </div>
   )
}