import { useState, useEffect } from "react";

const Timer = () => {
  //初期値設定
  const [seconds, setSeconds] = useState(100);
  const [strSeconds, setStrSeconds] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    setStrSeconds((seconds) => String(seconds));

    return () => clearTimeout(timeout);
  }, [seconds, strSeconds]);

  return <div>{seconds} seconds have elapsed.</div>;
};

export default Timer;
