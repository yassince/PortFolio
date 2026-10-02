"use client";

import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function ClientTypewriter({ words, delaySpeed = 500, cursor = false }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return <span>{words[0]}</span>;
  }

  return (
    <Typewriter
      words={words}
      loop
      delaySpeed={delaySpeed}
      cursor={cursor}
      cursorStyle="|"
    />
  );
}
