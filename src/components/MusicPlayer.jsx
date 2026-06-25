import { useEffect, useRef, useState } from "react";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const playMusic = () => {
    audioRef.current.play();
    setPlaying(true);
  };

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/birthday.mp3"
        loop
      />

      {!playing && (
        <button
          onClick={playMusic}
          className="music-btn"
        >
          
        </button>
      )}
    </>
  );
}

export default MusicPlayer;