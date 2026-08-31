"use client";

import { useEffect, useState } from "react";
import Reveal from "./reveal";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getTimeLeft = (targetDate: string): TimeLeft => {
  const difference = +new Date(targetDate) - +new Date();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export default function Timer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimer = () => setTimeLeft(getTimeLeft(targetDate));

    updateTimer();
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Helper function to format numbers with leading zeros
  const formatNumber = (num: number) => String(num).padStart(2, "0");

  const timeBlocks = [
    { label: "DAYS", value: timeLeft.days.toString() }, // Days don't strictly need 2-digit padding if over 99
    { label: "HOURS", value: formatNumber(timeLeft.hours) },
    { label: "MINUTES", value: formatNumber(timeLeft.minutes) },
    { label: "SECONDS", value: formatNumber(timeLeft.seconds) },
  ];

  return (
    <div className="flex justify-center items-center flex-wrap gap-2 md:gap-4 py-6 px-2">
      {timeBlocks.map((block, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center w-20 sm:w-32 h-28 sm:h-44 rounded-lg border border-border border-t-3 border-t-gold shadow-xl"
        >
          <Reveal>
            <span className="text-5xl sm:text-6xl font-serif text-[#800020] mb-2">{block.value}</span>
          </Reveal>
          <Reveal>
            <span className="text-[10px] md:text-xs font-sans tracking-widest text-[#B3925D]">{block.label}</span>
          </Reveal>
        </div>
      ))}
    </div>
  );
}
