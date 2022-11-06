// const pinyin = [
//   "píngguǒ",
//   "xīguā",
//   "hé",
//   "chī",
//   "mángguǒ",
//   "bōluó",
//   "miànbāo",
//   "jīdàn",
//   "bǐnggān",
//   "shuǐguǒ",
//   "xǐhuan",
//   "hē",
//   "chá",
//   "kāfēi",
//   "guǒzhī",
//   "shuǐ",
//   "xiǎng",
//   "mǎi",
//   "niúnǎi",
//   "píjiǔ",
//   "kělè",
// ];

// const chinese = [
//   "苹果",
//   "西瓜",
//   "和",
//   "吃",
//   "芒果",
//   "菠萝",
//   "面包",
//   "鸡蛋",
//   "饼干",
//   "水果",
//   "喜欢",
//   "喝",
//   "茶",
//   "咖啡",
//   "果汁",
//   "水",
//   "想",
//   "买",
//   "牛奶",
//   "啤酒",
//   "可乐",
// ];

// const obj = {
//   word: {
//     chinese: "",
//     pinyin: "",
//   },
// };

// const Food = pinyin.map((e, i) => {
//   const obj = {
//     word: {
//       chinese: "",
//       pinyin: "",
//     },
//   };
//   obj.word.chinese = chinese[i];
//   obj.word.pinyin = e;
//   return obj;
// });

const Food = [
  { word: { chinese: "苹果", pinyin: "píngguǒ" } },
  { word: { chinese: "西瓜", pinyin: "xīguā" } },
  { word: { chinese: "和", pinyin: "hé" } },
  { word: { chinese: "吃", pinyin: "chī" } },
  { word: { chinese: "芒果", pinyin: "mángguǒ" } },
  { word: { chinese: "菠萝", pinyin: "bōluó" } },
  { word: { chinese: "面包", pinyin: "miànbāo" } },
  { word: { chinese: "鸡蛋", pinyin: "jīdàn" } },
  { word: { chinese: "饼干", pinyin: "bǐnggān" } },
  { word: { chinese: "水果", pinyin: "shuǐguǒ" } },
  { word: { chinese: "喜欢", pinyin: "xǐhuan" } },
  { word: { chinese: "喝", pinyin: "hē" } },
  { word: { chinese: "茶", pinyin: "chá" } },
  { word: { chinese: "咖啡", pinyin: "kāfēi" } },
  { word: { chinese: "果汁", pinyin: "guǒzhī" } },
  { word: { chinese: "水", pinyin: "shuǐ" } },
  { word: { chinese: "想", pinyin: "xiǎng" } },
  { word: { chinese: "买", pinyin: "mǎi" } },
  { word: { chinese: "牛奶", pinyin: "niúnǎi" } },
  { word: { chinese: "啤酒", pinyin: "píjiǔ" } },
  { word: { chinese: "可乐", pinyin: "kělè" } },
];

export default Food;
