import { useState } from "react"

const StateFul=()=>
{
    const [count,setCount]=useState(0);
    const [subtract,setSubtract]=useState(9);
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Click here:{count}</button>
            <br></br>
          <button onClick={()=>setSubtract(subtract-1)}>Subtract jere:{subtract}</button>
        </div>
    )
}
export default StateFul;