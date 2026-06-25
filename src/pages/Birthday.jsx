import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import Balloon from "./Balloon";

function Birthday() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Play confetti sound once
    const confettiSound = new Audio("/music/confetti-[AudioTrimmer.com].mp3");
    confettiSound.volume = 0.7;

    confettiSound.play().catch((err) => {
      console.log("Audio error:", err);
    });

    // Stop confetti after 8 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showConfetti && <Confetti />}
      

      <div className="page">
      
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          🎂 Happy Birthday Sarah 🎂
        </motion.h1>

        <h2>
          May your day be filled with joy, laughter and success.
        </h2>

        <p>
          Thank you for being such a wonderful friend ❤️
        </p>
 {Array.from({ length: 20 }).map((_, index) => (
    <Balloon key={index} />
  ))}
      
      </div>
      
    </>
  );
}

export default Birthday;