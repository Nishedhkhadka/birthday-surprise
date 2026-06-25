import { BrowserRouter, Routes, Route } from "react-router-dom";
import MusicPlayer from "./components/MusicPlayer";

import Welcome from "./pages/Welcome";
import Mystery from "./pages/Mystery";
import Gallery from "./pages/Gallery";
import Countdown from "./pages/Countdown";
import Birthday from "./pages/Birthday";

function App() {
  return (
    <>
    <audio
        id="birthday-audio"
        src="/music/music.mp3"
        loop
      />
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/mystery" element={<Mystery />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/birthday" element={<Birthday />} />
      </Routes>
    </BrowserRouter>
    </>
   
  );
}

export default App;