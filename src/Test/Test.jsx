import {useEffect, useState} from "react";

function Counter() {

    // counter - это Текущее состояние(!)б setCounter - функция, которая меняет текущее состояние.
    const[counter, setCounter] = useState(0);
    

    useEffect(()=> {
        console.log("effect")
        return () => console.log('Counter is gone!')
    }, []);

    console.log("render");


    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={()=> setCounter(counter + 1)}>+</button>
            <button onClick={()=> setCounter(counter - 1)}>-</button>
        </div>
    )
}
export {Counter}
