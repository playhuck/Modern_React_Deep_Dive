import { ChangeEventHandler, useEffect, useMemo, useState } from "react";

function ExpensiveComponent({ value } : {
    value : number
}) {
    
    useEffect(() => {
        console.log('rendering!');
    });

    return <span>{ value + 1000 }</span>
}
export default function UseMemoPrac () {

    const [value, setValue] = useState(10);
    const [_, triggerRendering] = useState(false);
    const [num, setNum] = useState(1);

    const MemoizedComponent = useMemo(() => <ExpensiveComponent value={value} />, [value]);

    function handleChange(e : React.ChangeEvent<HTMLInputElement>) {
        setValue(Number(e.target.value))
    };

    function handleClick() {
        triggerRendering((prev) => !prev);

        setNum((prev) => prev + 1);
        
    };

    return (
        <>
        <input value={value} onChange={handleChange} />
        <button onClick={handleClick}>렌더링 발생!{num}</button>
        {MemoizedComponent}
        </>
    )
}