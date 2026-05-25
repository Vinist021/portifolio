
import { useEffect, useState } from "react";
import Desktop from "./components/desktop";
import LoadingScreen from "./components/loadingScreen";
import startSound from "./shared/assets/audios/startSound.mp3";


export default function App() {
  const hasSeenLoadingScreen = sessionStorage.getItem("loadingScreenSeen") === "true";
  const [showLoadingScreen, setShowLoadingScreen] = useState(!hasSeenLoadingScreen);

  useEffect(() => {
    if (!showLoadingScreen) return;
    const timer = setTimeout(() => {
      setShowLoadingScreen(false);
      sessionStorage.setItem("loadingScreenSeen", "false");
      const audio = new Audio(startSound);
      audio.play().catch(() => {});
    }, 5000);
    return () => clearTimeout(timer);
  }, [showLoadingScreen]);

  return (
    <>
      {showLoadingScreen && <LoadingScreen />}
      <Desktop />
    </>
  );
}
