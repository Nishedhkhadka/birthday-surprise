import { motion } from "framer-motion";

function Balloon() {
  const left = Math.random() * 100;

  const duration = 10 + Math.random() * 8;

  const size = 50 + Math.random() * 40;

  const colors = [
    "#ff4d6d",
    "#4dabf7",
    "#ffd43b",
    "#69db7c",
    "#da77f2",
    "#ff922b",
  ];

  const color =
    colors[Math.floor(Math.random() * colors.length)];

  return (
    <motion.div
      className="balloon"
      style={{
        left: `${left}%`,
        width: size,
        height: size * 1.2,
      }}
      initial={{
        y: window.innerHeight + 200,
      }}
      animate={{
        y: -window.innerHeight - 300,

        x: [
          0,
          Math.random() * 60 - 30,
          Math.random() * 100 - 50,
          Math.random() * 60 - 30,
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
      <div
        className="balloon-body"
        style={{
          background: color,
        }}
      />

      <div className="string" />
    </motion.div>
  );
}

export default Balloon;