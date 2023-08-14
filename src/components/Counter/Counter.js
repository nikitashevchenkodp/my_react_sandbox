import React, { useEffect, useRef, useState } from 'react';

const Counter = () => {
  const [isRun, setIsRun] = useState(false);
  const [timer, setTimer] = useState(0);
  const interval = useRef(null);

  useEffect(() => {
    if (!isRun) {
      clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);

    return () => clearInterval(interval.current);
  }, [isRun]);
  return (
    <div>
      <p>{timer}</p>
      <button onClick={() => setIsRun((run) => !run)}>toogle timer</button>
    </div>
  );
};

export default Counter;
