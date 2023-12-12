import { ChangeEventHandler, memo, useCallback, useEffect, useMemo, useState } from "react";

const UseCallbackPrac = memo(({ name, value, onChange } : {
    name: string,
    value: boolean,
    onChange: any
}) => {

    useEffect(() => {
        console.log('rendering!', name);
    });

    return (
        <>
            <h1>
                {name} {value ? '켜짐' : '꺼짐'}
            </h1>
            <button onClick={onChange}></button>
        </>
    )
});

export default UseCallbackPrac;