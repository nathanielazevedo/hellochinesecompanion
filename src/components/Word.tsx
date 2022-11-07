import React, { useEffect, useRef, useState } from "react";
import Input from "~/components/Letter";
import styles from "../styles/Home.module.css";

const Word = ({ word, next }: { word: any; next: any }) => {
  const [inputRefs, setInputRefs] = useState<any>(undefined);
  const text = word.word.pinyin;
  const textChinese = word.word.chinese;
  const textToArray = text?.split("");

  useEffect(() => {
    setInputRefs(document.getElementById("inputs"));
  }, []);

  const sayWord = () => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = textChinese;
    msg.lang = "zh";
    msg.rate = 0.5;
    window.speechSynthesis.speak(msg);
  };

  return (
    <div style={{ padding: "10rem 0 0 5rem" }}>
      <p className={styles.description} onClick={sayWord}>
        {textChinese}
      </p>
      <div
        id="inputs"
        style={{
          width: "fit-content",
          display: "flex",
          alignItems: "center",
        }}
      >
        {inputRefs &&
          textToArray?.map((letter: string, i: number) => (
            <Input
              letter={letter}
              refs={inputRefs?.children}
              index={i}
              next={next}
              key={i + letter}
            />
          ))}
      </div>
    </div>
  );
};

export default Word;
