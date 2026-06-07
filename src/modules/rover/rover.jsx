import { useEffect, useRef } from "react";
import { useClippy } from "@react95/clippy";
import bark from "../../assets/audios/bark.mp3";

const barkAudio = new Audio(bark);

export default function Rover() {
  const { clippy } = useClippy();
  const hasPlayedRef = useRef(false);

  const animations = clippy?.animations() || [];

  useEffect(() => {
    if (!clippy) return;

    const handleDoubleClick = () => {
      const randomAnimation = animations[Math.floor(Math.random() * animations.length)];

      if (randomAnimation) {
        clippy.play(randomAnimation);
      }
    };

    clippy._el?.addEventListener("dblclick", handleDoubleClick);

    return () => {
      clippy._el?.removeEventListener("dblclick", handleDoubleClick);
    };
  }, [clippy, animations]);

  useEffect(() => {
    if (!clippy || hasPlayedRef.current) return;
    hasPlayedRef.current = true;
    clippy.speak("Obrigado pela sua visita! Espero que goste da experiência.");
    setTimeout(() => {
      barkAudio.play();
    }, 1900);
  }, [clippy]);

  return null;
}