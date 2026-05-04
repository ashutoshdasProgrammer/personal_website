import { useEffect, useState } from "react";

function Intro() {
  const words = ["Frontend Engineer", "React Developer", "UI Designer"];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      // Typing
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, 80);

      // Word finished → start deleting after pause
      if (text === currentWord) {
        timeout = setTimeout(() => setIsDeleting(true), 1200);
      }
    } else {
      // Deleting
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, 40);

      // Word fully deleted → move to next word
      if (text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return (
    <>
      <div className="absolute top-1/3 left-[66%] -translate-x-1/2 -translate-y-1/2">
        <p className=" text-4xl p-2 m-2  ">Hi,</p>
        <p id="text" className="text-3xl p-2 m-2 ">
          I am a {text}
        </p>
      </div>
    </>
  );
}

export default Intro;
