import { useState, useEffect } from "react";

function Typewriter() {
  const words = ["Website Developer", "Full Stack WordPress Developer", "QA"];
  const [index, setIndex] = useState(0); // current word index
  const [subIndex, setSubIndex] = useState(0); // current letter index
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // Typing and Deleting Function
  useEffect(() => {
    if (index === words.length) return;

    const timeout = setTimeout(() => {
      const currentWord = words[index];

      if (!deleting) {
        setSubIndex(subIndex + 1);
        if (subIndex === currentWord.length) {
          setTimeout(() => setDeleting(true), 1000); // pause before deleting
        }
      } else {
        setSubIndex(subIndex - 1);
        if (subIndex === 0) {
          setDeleting(false);
          setIndex((index + 1) % words.length); // move to next word
        }
      }
    }, deleting ? 60 : 120); // adjust typing/backspace speed

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <span>
      {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
    </span>
  );
}

export default Typewriter;