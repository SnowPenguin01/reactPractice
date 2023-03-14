import React, { useState } from "react";

const Counter = () => {
    const [likes, setLikes] = useState(0)

    function Plus(){
        setLikes(likes + 1)
        console.log(likes);
      }
    
      function Minus(){
        setLikes(likes - 1)
        console.log(likes);
      }

    return(
        <div>
            <h1>{likes}</h1>
            <button onClick={Plus}>Plus 1</button>
            <button onClick={Minus}>Minus 1</button>
        </div>
    )
}

export default Counter;