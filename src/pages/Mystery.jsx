import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Mystery() {
  const navigate = useNavigate();

  const text =
    "There is someone amazing celebrating today...";

  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplay(text.slice(0, i + 1));
      i++;

      if (i === text.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <h2>{display}</h2>

      <button onClick={() => navigate("/gallery")}>
        Continue
      </button>
    </div>
  );
}

export default Mystery;