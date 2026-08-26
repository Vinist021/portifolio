import { useEffect, useRef } from "react";
import { useClippy } from "@react95/clippy";
import bark from "../../assets/audios/bark.mp3";

const barkAudio = new Audio(bark);

export default function Rover() {
  const { clippy } = useClippy();
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    if (!clippy) return;

    const agentElement = clippy._el;
    const balloonElement = clippy._balloon?._balloon;
    agentElement?.classList.add("rover-agent");
    balloonElement?.classList.add("rover-balloon");

    const handleDoubleClick = () => {
      const animations = clippy.animations() || [];
      const randomAnimation = animations[Math.floor(Math.random() * animations.length)];

      if (randomAnimation) {
        clippy.play(randomAnimation);
      }
    };

    agentElement?.addEventListener("dblclick", handleDoubleClick);

    return () => {
      agentElement?.removeEventListener("dblclick", handleDoubleClick);
      agentElement?.classList.remove("rover-agent");
      balloonElement?.classList.remove("rover-balloon");
    };
  }, [clippy]);

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
