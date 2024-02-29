import React from "react";
import videoSrc from "./video.mp4";
import useLocalStorage from "./useLocalStorage";

function App() {
  const video = React.useRef<HTMLVideoElement>(null);
  const [volume, setVolume] = useLocalStorage("volume", "0");

  React.useEffect(() => {
    if (!video.current) return;
    const volumeStr = Number(volume);
    if (volumeStr >= 0 && volumeStr <= 1) {
      video.current.volume = volumeStr;
    }
  }, [volume]);

  return (
    <div>
      <div className="flex">
        <button onClick={() => setVolume("0")}>0</button>
        <button onClick={() => setVolume("0.5")}>50</button>
        <button onClick={() => setVolume("1")}>100</button>
      </div>
      <video controls ref={video} src={videoSrc}>
        {" "}
      </video>
    </div>
  );
}

export default App;
