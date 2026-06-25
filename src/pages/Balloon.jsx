import { motion } from "framer-motion";

function Balloon() {
  const left = Math.random() * 100;

  const size = 50 + Math.random() * 40;

  const duration = 10 + Math.random() * 8;

  return (
    <motion.div
      className="balloon"
      style={{
        left: `${left}%`,
        fontSize: `${size}px`,
      }}
      initial={{
        y: window.innerHeight + 200,
      }}
      animate={{
        y: -window.innerHeight - 300,
        x: [
          0,
          Math.random() * 50 - 25,
          Math.random() * 80 - 40,
          Math.random() * 50 - 25,
          0,
        ],
        rotate: [-8, 8, -5, 5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      🎈
    </motion.div>
  );
}

export default Balloon;