import { useEffect, useRef } from "react";
import { useClippy } from "@react95/clippy";

export default function Rover() {
  const { clippy } = useClippy();
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    if (!clippy || hasPlayedRef.current) return;
    hasPlayedRef.current = true;
    clippy.speak("Obrigado pela sua visita! Espero que goste da experiência.");
  }, [clippy]);

  return null;
}