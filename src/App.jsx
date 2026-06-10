
import { useEffect, useState } from "react";
import { AGENTS, ClippyProvider } from "@react95/clippy";
import Desktop from "./modules/desktop/desktop";
import LoadingScreen from "./modules/loadingScreen/loadingScreen";
import startSound from "./assets/audios/startSound.mp3";
import Rover from "./modules/rover/rover";

export default function App() {
  const hasSeenLoadingScreen = sessionStorage.getItem("loadingScreenSeen") === "true";
  const [showLoadingScreen, setShowLoadingScreen] = useState(!hasSeenLoadingScreen);

  useEffect(() => {
    if (!showLoadingScreen) return;
    const timer = setTimeout(() => {
      setShowLoadingScreen(false);
      sessionStorage.setItem("loadingScreenSeen", "true");
      const audio = new Audio(startSound);
      audio.play().catch(() => {});
    }, 8000);
    return () => clearTimeout(timer);
  }, [showLoadingScreen]);

  return (
    <>
      {showLoadingScreen && <LoadingScreen />}
      {!showLoadingScreen && (
        <ClippyProvider agentName={AGENTS.ROVER}>
          <Rover/>
        </ClippyProvider>
      )}
      <Desktop />
    </>
  );
}