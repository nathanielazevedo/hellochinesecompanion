import { pinyin } from "./PinYin";
import { chinese1 } from "./Chinese";

const obj = {
  word: {
    chinese: "",
    pinyin: "",
  },
};

const Food = pinyin.map((e, i) => {
  const obj = {
    word: {
      chinese: "",
      pinyin: "",
    },
  };
  if (!e.startsWith("//")) {
    obj.word.chinese = chinese1[i] as string;
    obj.word.pinyin = e;
    return obj;
  } else {
    return e;
  }
});

console.log(Food);
