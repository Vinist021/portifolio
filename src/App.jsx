
import { useEffect, useState } from "react";
import Desktop from "./components/desktop";
import LoadingScreen from "./components/loadingScreen";


export default function App() {
  const hasSeenLoadingScreen = sessionStorage.getItem("loadingScreenSeen") === "true";
  const [showLoadingScreen, setShowLoadingScreen] = useState(!hasSeenLoadingScreen);

  useEffect(() => {
    if (!showLoadingScreen) return;
    const timer = setTimeout(() => {
      setShowLoadingScreen(false);
      sessionStorage.setItem("loadingScreenSeen", "true");
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
