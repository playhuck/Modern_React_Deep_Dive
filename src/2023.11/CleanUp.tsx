import { useState, useEffect } from "react";

export default function CleanUp() {

    const [counter, setCounter] = useState(0);

    function handleClick(){
        setCounter((prev) => prev + 1);
    };

    useEffect(() => {

        function addMouseEvent() {
            console.log(counter);
        };

        window.addEventListener('click', addMouseEvent);

        return () => {
            console.log('클린업 함수 실행!', counter);
            window.removeEventListener('click', addMouseEvent);
        }
    }, [counter]);

    useEffect(() => {

        console.log("Hello");
        
    }, [counter]);

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={handleClick}>+</button>
        </>
    )
}