import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Countdown() {
  const [count, setCount] = useState(3);

  const navigate = useNavigate();

  useEffect(() => {
    if (count === 0) {
      navigate("/birthday");
      return;
    }

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="page">
      <h1>{count}</h1>
    </div>
  );
}

export default Countdown;