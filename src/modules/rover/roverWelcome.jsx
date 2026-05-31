import { useEffect, useRef } from "react";
import { useClippy } from "@react95/clippy";

export default function RoverWelcome() {
  const { clippy } = useClippy();
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    if (!clippy || hasPlayedRef.current) return;
    hasPlayedRef.current = true;
    clippy.play("Wave");
  }, [clippy]);

  return null;
}