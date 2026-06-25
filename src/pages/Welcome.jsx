import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  const handleStart = () => {
    const audio = document.getElementById("birthday-audio");

    if (audio) {
      audio.play().catch((err) => {
        console.log("Audio failed:", err);
      });
    }

    navigate("/mystery");
  };

  return (
    <div className="page">
      <h1>🎁 A Surprise Awaits</h1>

      <button onClick={handleStart}>
        Start
      </button>
    </div>
  );
}

export default Welcome;