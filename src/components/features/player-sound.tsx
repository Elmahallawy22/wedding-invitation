"use client";

import { useEffect, useRef, useState } from "react";
import { Music2, Pause } from "lucide-react";

export default function PlayerSound() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current) {
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (error) {
        console.log("Autoplay was blocked by the browser");
        setIsPlaying(false);
      }
    };

    playAudio();
  }, []);

  // Play / Pause
  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (audioRef.current.paused) {
        await audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Audio playback failed:", error);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/audio/marry-me.mpeg" type="audio/mpeg" />
      </audio>
      <button
        onClick={toggleMusic}
        className="bg-fg text-bg w-10 lg:w-12 h-10 lg:h-12 rounded-full fixed left-4 md:left-6 bottom-10 z-10 flex justify-center items-center"
      >
        {isPlaying ? (
          <span>
            <Pause className="w-4 h-4 lg:w-6 lg:h-6" />
          </span>
        ) : (
          <span>
            <Music2 className="w-4 h-4 lg:w-6 lg:h-6" />
          </span>
        )}
      </button>
    </>
  );
}
