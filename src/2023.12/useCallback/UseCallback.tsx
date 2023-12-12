import { useCallback, useState } from "react";
import UseCallbackPrac from "./UseCallbackPrac";

const UseCallback = () => {
  const [statue1, setStatus1] = useState(false);
  const [statue2, setStatus2] = useState(false);

  const toggle1 = useCallback(
    function toggle1() {
      setStatus1(!statue1);
      console.log("toggle1 생성");
    },
    [statue1]
  );

  const toggle2 = useCallback(
    function toggle2() {
      setStatus2(!statue2);
      console.log("toggle2 생성");
    },
    [statue2]
  );

  //   const toggle2 = () => {
  //       setStatus2(!statue2);
  //       console.log("toggle2 생성");
  //     }

  return (
    <>
      <UseCallbackPrac
        name="1"
        value={statue1}
        onChange={toggle1}
      ></UseCallbackPrac>
      <UseCallbackPrac
        name="2"
        value={statue2}
        onChange={toggle2}
      ></UseCallbackPrac>
    </>
  );
};

export default UseCallback;
