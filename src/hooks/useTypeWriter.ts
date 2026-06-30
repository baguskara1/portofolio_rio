"use client";

import { useState, useEffect } from "react";

const TYPING_SPEED = 60;
const DELETING_SPEED = 30;
const PAUSE_DURATION = 1000;
const DELETE_PAUSE = 300;

export function useTypeWriter(titles: string[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text === currentFullText) {
          setIsDeleting(true);
          return;
        }
        setText(currentFullText.substring(0, text.length + 1));
      } else {
        if (text === "") {
          setIsDeleting(false);
          setCurrentIndex((i) => (i + 1) % titles.length);
          return;
        }
        setText(text.substring(0, text.length - 1));
      }
    }, isDeleting
      ? text === "" ? DELETE_PAUSE : DELETING_SPEED
      : text === currentFullText ? PAUSE_DURATION : TYPING_SPEED);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex, titles]);

  return text;
}
