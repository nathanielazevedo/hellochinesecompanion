// import * as fs from "fs";
const fs = require("fs");
const Final = [
  "Family 1",
  {
    word: {
      chinese: "的",
      pinyin: "de",
    },
  },
  {
    word: {
      chinese: "爸爸",
      pinyin: "bàba",
    },
  },
  {
    word: {
      chinese: "妈妈",
      pinyin: "māma",
    },
  },
  {
    word: {
      chinese: "爷爷",
      pinyin: "yéye",
    },
  },
  {
    word: {
      chinese: "奶奶",
      pinyin: "nǎinai",
    },
  },
  {
    word: {
      chinese: "哥哥",
      pinyin: "gēge",
    },
  },
  {
    word: {
      chinese: "姐姐",
      pinyin: "jiějie",
    },
  },
  {
    word: {
      chinese: "弟弟",
      pinyin: "dìdi",
    },
  },
  {
    word: {
      chinese: "妹妹",
      pinyin: "mèimei",
    },
  },
  {
    word: {
      chinese: "有",
      pinyin: "yǒu",
    },
  },
  {
    word: {
      chinese: "没有",
      pinyin: "méiyǒu",
    },
  },
  {
    word: {
      chinese: "几",
      pinyin: "jǐ",
    },
  },
  {
    word: {
      chinese: "口",
      pinyin: "kǒu",
    },
  },
  {
    word: {
      chinese: "家",
      pinyin: "jiā",
    },
  },
  {
    word: {
      chinese: "这",
      pinyin: "zhè",
    },
  },
  {
    word: {
      chinese: "那",
      pinyin: "nà",
    },
  },
  {
    word: {
      chinese: "猫",
      pinyin: "māo",
    },
  },
  {
    word: {
      chinese: "狗",
      pinyin: "gǒu",
    },
  },
  "Dates",
  {
    word: {
      chinese: "今天",
      pinyin: "jīntiān",
    },
  },
  {
    word: {
      chinese: "星期一",
      pinyin: "Xīngqīyī",
    },
  },
  {
    word: {
      chinese: "星期二",
      pinyin: "Xīngqīèr",
    },
  },
  {
    word: {
      chinese: "星期三",
      pinyin: "Xīngqīsān",
    },
  },
  {
    word: {
      chinese: "星期四",
      pinyin: "Xīngqīsì",
    },
  },
  {
    word: {
      chinese: "星期五",
      pinyin: "Xīngqīwǔ",
    },
  },
  {
    word: {
      chinese: "星期六",
      pinyin: "Xīngqīliù",
    },
  },
  {
    word: {
      chinese: "星期天",
      pinyin: "Xīngqītiān",
    },
  },
  {
    word: {
      chinese: "昨天",
      pinyin: "zuótiān",
    },
  },
  {
    word: {
      chinese: "星期几",
      pinyin: "xīngqījǐ",
    },
  },
  {
    word: {
      chinese: "月",
      pinyin: "yuè",
    },
  },
  {
    word: {
      chinese: "号",
      pinyin: "hào",
    },
  },
  {
    word: {
      chinese: "年",
      pinyin: "nián",
    },
  },
  {
    word: {
      chinese: "生日",
      pinyin: "shēngri",
    },
  },
  {
    word: {
      chinese: "零",
      pinyin: "líng",
    },
  },
  "Locations",
  {
    word: {
      chinese: "去",
      pinyin: "qù",
    },
  },
  {
    word: {
      chinese: "饭馆",
      pinyin: "fànguǎn",
    },
  },
  {
    word: {
      chinese: "学校",
      pinyin: "xuéxiào",
    },
  },
  {
    word: {
      chinese: "超市",
      pinyin: "chāoshì",
    },
  },
  {
    word: {
      chinese: "公司",
      pinyin: "gōngsī",
    },
  },
  {
    word: {
      chinese: "哪里",
      pinyin: "nǎli",
    },
  },
  {
    word: {
      chinese: "在",
      pinyin: "zài",
    },
  },
  {
    word: {
      chinese: "商店",
      pinyin: "shāngdiàn",
    },
  },
  {
    word: {
      chinese: "机场",
      pinyin: "jīchǎng",
    },
  },
  {
    word: {
      chinese: "医院",
      pinyin: "yīyuàn",
    },
  },
  {
    word: {
      chinese: "前边",
      pinyin: "qiánbian",
    },
  },
  {
    word: {
      chinese: "后边",
      pinyin: "hòubian",
    },
  },
  {
    word: {
      chinese: "公园",
      pinyin: "gōngyuán",
    },
  },
  {
    word: {
      chinese: "酒店",
      pinyin: "jiǔdiàn",
    },
  },
  {
    word: {
      chinese: "附近",
      pinyin: "fùjìn",
    },
  },
  {
    word: {
      chinese: "厕所",
      pinyin: "cèsuǒ",
    },
  },
  {
    word: {
      chinese: "银行",
      pinyin: "yínháng",
    },
  },
  "Personal Information",
  {
    word: {
      chinese: "什么",
      pinyin: "shénme",
    },
  },
  {
    word: {
      chinese: "叫",
      pinyin: "jiào",
    },
  },
  {
    word: {
      chinese: "姓",
      pinyin: "xìng",
    },
  },
  {
    word: {
      chinese: "谁",
      pinyin: "shuí",
    },
  },
  {
    word: {
      chinese: "谁",
      pinyin: "shéi",
    },
  },
  {
    word: {
      chinese: "哪",
      pinyin: "nǎ",
    },
  },
  {
    word: {
      chinese: "国",
      pinyin: "guó",
    },
  },
  {
    word: {
      chinese: "多大",
      pinyin: "duō dà",
    },
  },
  {
    word: {
      chinese: "岁",
      pinyin: "suì",
    },
  },
  {
    word: {
      chinese: "呢",
      pinyin: "ne",
    },
  },
  {
    word: {
      chinese: "老师",
      pinyin: "lǎoshī",
    },
  },
  {
    word: {
      chinese: "医生",
      pinyin: "yīshēng",
    },
  },
  {
    word: {
      chinese: "学生",
      pinyin: "xuésheng",
    },
  },
  {
    word: {
      chinese: "北京",
      pinyin: "Běijīng",
    },
  },
  {
    word: {
      chinese: "上海",
      pinyin: "Shànghǎi",
    },
  },
  {
    word: {
      chinese: "纽约",
      pinyin: "Niǔyuē",
    },
  },
  {
    word: {
      chinese: "伦敦",
      pinyin: "Lúndūn",
    },
  },
  "Time",
  {
    word: {
      chinese: "点",
      pinyin: "diǎn",
    },
  },
  {
    word: {
      chinese: "分",
      pinyin: "fēn",
    },
  },
  {
    word: {
      chinese: "现在",
      pinyin: "xiànzài",
    },
  },
  {
    word: {
      chinese: "起床",
      pinyin: "qǐchuáng",
    },
  },
  {
    word: {
      chinese: "睡觉",
      pinyin: "shuìjiào",
    },
  },
  {
    word: {
      chinese: "吃饭",
      pinyin: "chīfàn",
    },
  },
  {
    word: {
      chinese: "洗澡",
      pinyin: "xǐzǎo",
    },
  },
  {
    word: {
      chinese: "早上",
      pinyin: "zǎoshang",
    },
  },
  {
    word: {
      chinese: "晚上",
      pinyin: "wǎnshang",
    },
  },
  {
    word: {
      chinese: "中午",
      pinyin: "zhōngwǔ",
    },
  },
  {
    word: {
      chinese: "上午",
      pinyin: "shàngwǔ",
    },
  },
  {
    word: {
      chinese: "下午",
      pinyin: "xiàwǔ",
    },
  },
  "Hometown",
  {
    word: {
      chinese: "很",
      pinyin: "hěn",
    },
  },
  {
    word: {
      chinese: "大",
      pinyin: "dà",
    },
  },
  {
    word: {
      chinese: "小",
      pinyin: "xiǎo",
    },
  },
  {
    word: {
      chinese: "冷",
      pinyin: "lěng",
    },
  },
  {
    word: {
      chinese: "热",
      pinyin: "rè",
    },
  },
  {
    word: {
      chinese: "非常",
      pinyin: "fēicháng",
    },
  },
  {
    word: {
      chinese: "漂亮",
      pinyin: "piàoliang",
    },
  },
  {
    word: {
      chinese: "干净",
      pinyin: "gānjìng",
    },
  },
  {
    word: {
      chinese: "汉堡",
      pinyin: "hànbǎo",
    },
  },
  {
    word: {
      chinese: "薯条",
      pinyin: "shǔtiáo",
    },
  },
  {
    word: {
      chinese: "好吃",
      pinyin: "hǎochī",
    },
  },
  {
    word: {
      chinese: "真",
      pinyin: "zhēn",
    },
  },
  {
    word: {
      chinese: "好喝",
      pinyin: "hǎohē",
    },
  },
  {
    word: {
      chinese: "便宜",
      pinyin: "piányi",
    },
  },
  {
    word: {
      chinese: "贵",
      pinyin: "guì",
    },
  },
  "Taste",
  {
    word: {
      chinese: "柠檬",
      pinyin: "níngméng",
    },
  },
  {
    word: {
      chinese: "酸",
      pinyin: "suān",
    },
  },
  {
    word: {
      chinese: "甜",
      pinyin: "tián",
    },
  },
  {
    word: {
      chinese: "太",
      pinyin: "tài",
    },
  },
  {
    word: {
      chinese: "了",
      pinyin: "le",
    },
  },
  {
    word: {
      chinese: "的",
      pinyin: "de",
    },
  },
  {
    word: {
      chinese: "菜",
      pinyin: "cài",
    },
  },
  {
    word: {
      chinese: "辣",
      pinyin: "là",
    },
  },
  {
    word: {
      chinese: "苦",
      pinyin: "kǔ",
    },
  },
  {
    word: {
      chinese: "咸",
      pinyin: "xián",
    },
  },
  "Restaurants 1",
  {
    word: {
      chinese: "米饭",
      pinyin: "mǐfàn",
    },
  },
  {
    word: {
      chinese: "要",
      pinyin: "yào",
    },
  },
  {
    word: {
      chinese: "饺子",
      pinyin: "jiǎozi",
    },
  },
  {
    word: {
      chinese: "服务员",
      pinyin: "fúwùyuán",
    },
  },
  {
    word: {
      chinese: "面条",
      pinyin: "miàntiáo",
    },
  },
  {
    word: {
      chinese: "牛排",
      pinyin: "niúpái",
    },
  },
  {
    word: {
      chinese: "份",
      pinyin: "fèn",
    },
  },
  {
    word: {
      chinese: "沙拉",
      pinyin: "shālā",
    },
  },
  {
    word: {
      chinese: "色拉",
      pinyin: "sèlā",
    },
  },
  {
    word: {
      chinese: "汤",
      pinyin: "tāng",
    },
  },
  {
    word: {
      chinese: "碗",
      pinyin: "wǎn",
    },
  },
  {
    word: {
      chinese: "筷子",
      pinyin: "kuàizi",
    },
  },
  {
    word: {
      chinese: "双",
      pinyin: "shuāng",
    },
  },
  {
    word: {
      chinese: "给",
      pinyin: "gěi",
    },
  },
  {
    word: {
      chinese: "勺子",
      pinyin: "sháozi",
    },
  },
  {
    word: {
      chinese: "叉子",
      pinyin: "chāzi",
    },
  },
  "Daily Schedule",
  {
    word: {
      chinese: "每天",
      pinyin: "měitiān",
    },
  },
  {
    word: {
      chinese: "回",
      pinyin: "huí",
    },
  },
  {
    word: {
      chinese: "来",
      pinyin: "lái",
    },
  },
  {
    word: {
      chinese: "早饭",
      pinyin: "zǎofàn",
    },
  },
  {
    word: {
      chinese: "午饭",
      pinyin: "wǔfàn",
    },
  },
  {
    word: {
      chinese: "晚饭",
      pinyin: "wǎnfàn",
    },
  },
  {
    word: {
      chinese: "什么时候",
      pinyin: "shénme shíhou",
    },
  },
  {
    word: {
      chinese: "上班",
      pinyin: "shàngbān",
    },
  },
  {
    word: {
      chinese: "下班",
      pinyin: "xiàbān",
    },
  },
  {
    word: {
      chinese: "上课",
      pinyin: "shàngkè",
    },
  },
  {
    word: {
      chinese: "下课",
      pinyin: "xiàkè",
    },
  },
  {
    word: {
      chinese: "能",
      pinyin: "néng",
    },
  },
  {
    word: {
      chinese: "周末",
      pinyin: "zhōumò",
    },
  },
  "Leisure",
  {
    word: {
      chinese: "经常",
      pinyin: "jīngcháng",
    },
  },
  {
    word: {
      chinese: "干什么",
      pinyin: "gàn shénme",
    },
  },
  {
    word: {
      chinese: "听",
      pinyin: "tīng",
    },
  },
  {
    word: {
      chinese: "玩",
      pinyin: "wán",
    },
  },
  {
    word: {
      chinese: "上网",
      pinyin: "shàngwǎng",
    },
  },
  {
    word: {
      chinese: "音乐",
      pinyin: "yīnyuè",
    },
  },
  {
    word: {
      chinese: "游戏",
      pinyin: "yóuxì",
    },
  },
  {
    word: {
      chinese: "看",
      pinyin: "kàn",
    },
  },
  {
    word: {
      chinese: "电影",
      pinyin: "diànyǐng",
    },
  },
  {
    word: {
      chinese: "电视",
      pinyin: "diànshì",
    },
  },
  {
    word: {
      chinese: "书",
      pinyin: "shū",
    },
  },
  {
    word: {
      chinese: "报纸",
      pinyin: "bàozhǐ",
    },
  },
  {
    word: {
      chinese: "跟",
      pinyin: "gēn",
    },
  },
  {
    word: {
      chinese: "一起",
      pinyin: "yīqǐ",
    },
  },
  {
    word: {
      chinese: "朋友",
      pinyin: "péngyou",
    },
  },
  {
    word: {
      chinese: "同学",
      pinyin: "tóngxué",
    },
  },
  {
    word: {
      chinese: "同事",
      pinyin: "tóngshì",
    },
  },
  "Appearance",
  {
    word: {
      chinese: "胖",
      pinyin: "pàng",
    },
  },
  {
    word: {
      chinese: "瘦",
      pinyin: "shòu",
    },
  },
  {
    word: {
      chinese: "比",
      pinyin: "bǐ",
    },
  },
  {
    word: {
      chinese: "帅",
      pinyin: "shuài",
    },
  },
  {
    word: {
      chinese: "高",
      pinyin: "gāo",
    },
  },
  {
    word: {
      chinese: "矮",
      pinyin: "ǎi",
    },
  },
  {
    word: {
      chinese: "一点儿",
      pinyin: "yīdiǎnr",
    },
  },
  {
    word: {
      chinese: "眼睛",
      pinyin: "yǎnjing",
    },
  },
  {
    word: {
      chinese: "脸",
      pinyin: "liǎn",
    },
  },
  {
    word: {
      chinese: "没有",
      pinyin: "méiyǒu",
    },
  },
  {
    word: {
      chinese: "头发",
      pinyin: "tóufa",
    },
  },
  {
    word: {
      chinese: "腿",
      pinyin: "tuǐ",
    },
  },
  {
    word: {
      chinese: "长",
      pinyin: "cháng",
    },
  },
  {
    word: {
      chinese: "短",
      pinyin: "duǎn",
    },
  },
  {
    word: {
      chinese: "更",
      pinyin: "gèng",
    },
  },
  {
    word: {
      chinese: "最",
      pinyin: "zuì",
    },
  },
  "Clothes",
  {
    word: {
      chinese: "衬衫",
      pinyin: "chènshān",
    },
  },
  {
    word: {
      chinese: "好看",
      pinyin: "hǎokàn",
    },
  },
  {
    word: {
      chinese: "外套",
      pinyin: "wàitào",
    },
  },
  {
    word: {
      chinese: "件",
      pinyin: "jiàn",
    },
  },
  {
    word: {
      chinese: "毛衣",
      pinyin: "máoyī",
    },
  },
  {
    word: {
      chinese: "条",
      pinyin: "tiáo",
    },
  },
  {
    word: {
      chinese: "裤子",
      pinyin: "kùzi",
    },
  },
  {
    word: {
      chinese: "裙子",
      pinyin: "qúnzi",
    },
  },
  {
    word: {
      chinese: "有点儿",
      pinyin: "yǒudiǎnr",
    },
  },
  {
    word: {
      chinese: "鞋",
      pinyin: "xié",
    },
  },
  {
    word: {
      chinese: "帽子",
      pinyin: "màozi",
    },
  },
  {
    word: {
      chinese: "围巾",
      pinyin: "wéijīn",
    },
  },
  "Colors",
  {
    word: {
      chinese: "红色",
      pinyin: "hóngsè",
    },
  },
  {
    word: {
      chinese: "黑色",
      pinyin: "hēisè",
    },
  },
  {
    word: {
      chinese: "白色",
      pinyin: "báisè",
    },
  },
  {
    word: {
      chinese: "绿色",
      pinyin: "lǜsè",
    },
  },
  {
    word: {
      chinese: "颜色",
      pinyin: "yánsè",
    },
  },
  {
    word: {
      chinese: "蓝色",
      pinyin: "lánsè",
    },
  },
  {
    word: {
      chinese: "棕色",
      pinyin: "zōngsè",
    },
  },
  {
    word: {
      chinese: "粉色",
      pinyin: "fěnsè",
    },
  },
  {
    word: {
      chinese: "黄色",
      pinyin: "huángsè",
    },
  },
  {
    word: {
      chinese: "还是",
      pinyin: "háishi",
    },
  },
  "Shopping",
  {
    word: {
      chinese: "试",
      pinyin: "shì",
    },
  },
  {
    word: {
      chinese: "逛",
      pinyin: "guàng",
    },
  },
  {
    word: {
      chinese: "尝",
      pinyin: "cháng",
    },
  },
  {
    word: {
      chinese: "手机",
      pinyin: "shǒujī",
    },
  },
  {
    word: {
      chinese: "电脑",
      pinyin: "diànnǎo",
    },
  },
  {
    word: {
      chinese: "钱包",
      pinyin: "qiánbāo",
    },
  },
  {
    word: {
      chinese: "手表",
      pinyin: "shǒubiǎo",
    },
  },
  {
    word: {
      chinese: "觉得",
      pinyin: "juéde",
    },
  },
  {
    word: {
      chinese: "怎么样",
      pinyin: "zěnmeyàng",
    },
  },
  {
    word: {
      chinese: "可以",
      pinyin: "kěyǐ",
    },
  },
  {
    word: {
      chinese: "用",
      pinyin: "yòng",
    },
  },
  {
    word: {
      chinese: "现金",
      pinyin: "xiànjīn",
    },
  },
  {
    word: {
      chinese: "信用卡",
      pinyin: "xìnyòngkǎ",
    },
  },
  {
    word: {
      chinese: "支付宝",
      pinyin: "Zhīfùbǎo",
    },
  },
  "Sports",
  {
    word: {
      chinese: "会",
      pinyin: "huì",
    },
  },
  {
    word: {
      chinese: "打",
      pinyin: "dǎ",
    },
  },
  {
    word: {
      chinese: "篮球",
      pinyin: "lánqiú",
    },
  },
  {
    word: {
      chinese: "网球",
      pinyin: "wǎngqiú",
    },
  },
  {
    word: {
      chinese: "羽毛球",
      pinyin: "yǔmáoqiú",
    },
  },
  {
    word: {
      chinese: "棒球",
      pinyin: "bàngqiú",
    },
  },
  {
    word: {
      chinese: "吧",
      pinyin: "ba",
    },
  },
  {
    word: {
      chinese: "跑步",
      pinyin: "pǎobù",
    },
  },
  {
    word: {
      chinese: "游泳",
      pinyin: "yóuyǒng",
    },
  },
  {
    word: {
      chinese: "踢",
      pinyin: "tī",
    },
  },
  {
    word: {
      chinese: "足球",
      pinyin: "zúqiú",
    },
  },
  {
    word: {
      chinese: "得",
      pinyin: "de",
    },
  },
  {
    word: {
      chinese: "好",
      pinyin: "hǎo",
    },
  },
  {
    word: {
      chinese: "差",
      pinyin: "chà",
    },
  },
  {
    word: {
      chinese: "骑",
      pinyin: "qí",
    },
  },
  {
    word: {
      chinese: "快",
      pinyin: "kuài",
    },
  },
  {
    word: {
      chinese: "慢",
      pinyin: "màn",
    },
  },
  {
    word: {
      chinese: "自行车",
      pinyin: "zìxíngchē",
    },
  },
  "Spare Time",
  {
    word: {
      chinese: "在",
      pinyin: "zài",
    },
  },
  {
    word: {
      chinese: "正在",
      pinyin: "zhèngzài",
    },
  },
  {
    word: {
      chinese: "洗",
      pinyin: "xǐ",
    },
  },
  {
    word: {
      chinese: "打扫",
      pinyin: "dǎsǎo",
    },
  },
  {
    word: {
      chinese: "做饭",
      pinyin: "zuòfàn",
    },
  },
  {
    word: {
      chinese: "房间",
      pinyin: "fángjiān",
    },
  },
  {
    word: {
      chinese: "衣服",
      pinyin: "yīfu",
    },
  },
  {
    word: {
      chinese: "没",
      pinyin: "méi",
    },
  },
  {
    word: {
      chinese: "爬山",
      pinyin: "páshān",
    },
  },
  {
    word: {
      chinese: "聊天",
      pinyin: "liáotiān",
    },
  },
  {
    word: {
      chinese: "一边",
      pinyin: "yībiān",
    },
  },
  {
    word: {
      chinese: "唱歌",
      pinyin: "chànggē",
    },
  },
  {
    word: {
      chinese: "跳舞",
      pinyin: "tiàowǔ",
    },
  },
  {
    word: {
      chinese: "画画儿",
      pinyin: "huàhuàr",
    },
  },
  "Transport",
  {
    word: {
      chinese: "坐",
      pinyin: "zuò",
    },
  },
  {
    word: {
      chinese: "飞机",
      pinyin: "fēijī",
    },
  },
  {
    word: {
      chinese: "火车",
      pinyin: "huǒchē",
    },
  },
  {
    word: {
      chinese: "船",
      pinyin: "chuán",
    },
  },
  {
    word: {
      chinese: "怎么",
      pinyin: "zěnme",
    },
  },
  {
    word: {
      chinese: "出租车",
      pinyin: "chūzūchē",
    },
  },
  {
    word: {
      chinese: "地铁",
      pinyin: "dìtiě",
    },
  },
  {
    word: {
      chinese: "公交车",
      pinyin: "gōngjiāochē",
    },
  },
  {
    word: {
      chinese: "有时候",
      pinyin: "yǒu shíhou",
    },
  },
  {
    word: {
      chinese: "走路",
      pinyin: "zǒulù",
    },
  },
  {
    word: {
      chinese: "开车",
      pinyin: "kāichē",
    },
  },
  "Directions",
  {
    word: {
      chinese: "离",
      pinyin: "lí",
    },
  },
  {
    word: {
      chinese: "远",
      pinyin: "yuǎn",
    },
  },
  {
    word: {
      chinese: "近",
      pinyin: "jìn",
    },
  },
  {
    word: {
      chinese: "这里",
      pinyin: "zhèlǐ",
    },
  },
  {
    word: {
      chinese: "那里",
      pinyin: "nàli",
    },
  },
  {
    word: {
      chinese: "加油站",
      pinyin: "jiāyóuzhàn",
    },
  },
  {
    word: {
      chinese: "从",
      pinyin: "cóng",
    },
  },
  {
    word: {
      chinese: "到",
      pinyin: "dào",
    },
  },
  {
    word: {
      chinese: "走",
      pinyin: "zǒu",
    },
  },
  {
    word: {
      chinese: "向",
      pinyin: "xiàng",
    },
  },
  {
    word: {
      chinese: "一直",
      pinyin: "yīzhí",
    },
  },
  {
    word: {
      chinese: "前",
      pinyin: "qián",
    },
  },
  {
    word: {
      chinese: "后",
      pinyin: "hòu",
    },
  },
  {
    word: {
      chinese: "沿",
      pinyin: "yán",
    },
  },
  {
    word: {
      chinese: "路",
      pinyin: "lù",
    },
  },
  {
    word: {
      chinese: "往",
      pinyin: "wǎng",
    },
  },
  {
    word: {
      chinese: "第",
      pinyin: "dì",
    },
  },
  {
    word: {
      chinese: "拐",
      pinyin: "guǎi",
    },
  },
  {
    word: {
      chinese: "左",
      pinyin: "zuǒ",
    },
  },
  {
    word: {
      chinese: "右",
      pinyin: "yòu",
    },
  },
  {
    word: {
      chinese: "路口",
      pinyin: "lùkǒu",
    },
  },
  "Rooms",
  {
    word: {
      chinese: "对面",
      pinyin: "duìmiàn",
    },
  },
  {
    word: {
      chinese: "卫生间",
      pinyin: "wèishēngjiān",
    },
  },
  {
    word: {
      chinese: "厨房",
      pinyin: "chúfáng",
    },
  },
  {
    word: {
      chinese: "卧室",
      pinyin: "wòshì",
    },
  },
  {
    word: {
      chinese: "客厅",
      pinyin: "kètīng",
    },
  },
  {
    word: {
      chinese: "上边",
      pinyin: "shàngbian",
    },
  },
  {
    word: {
      chinese: "下边",
      pinyin: "xiàbian",
    },
  },
  {
    word: {
      chinese: "桌子",
      pinyin: "zhuōzi",
    },
  },
  {
    word: {
      chinese: "椅子",
      pinyin: "yǐzi",
    },
  },
  {
    word: {
      chinese: "柜子",
      pinyin: "guìzi",
    },
  },
  {
    word: {
      chinese: "灯",
      pinyin: "dēng",
    },
  },
  {
    word: {
      chinese: "旁边",
      pinyin: "pángbiān",
    },
  },
  {
    word: {
      chinese: "左边",
      pinyin: "zuǒbian",
    },
  },
  {
    word: {
      chinese: "右边",
      pinyin: "yòubian",
    },
  },
  {
    word: {
      chinese: "床",
      pinyin: "chuáng",
    },
  },
  {
    word: {
      chinese: "冰箱",
      pinyin: "bīngxiāng",
    },
  },
  "Weather",
  {
    word: {
      chinese: "天气",
      pinyin: "tiānqì",
    },
  },
  {
    word: {
      chinese: "晴天",
      pinyin: "qíngtiān",
    },
  },
  {
    word: {
      chinese: "阴天",
      pinyin: "yīntiān",
    },
  },
  {
    word: {
      chinese: "暖和",
      pinyin: "nuǎnhuo",
    },
  },
  {
    word: {
      chinese: "凉快",
      pinyin: "liángkuai",
    },
  },
  {
    word: {
      chinese: "会",
      pinyin: "huì",
    },
  },
  {
    word: {
      chinese: "下雨",
      pinyin: "xiàyǔ",
    },
  },
  {
    word: {
      chinese: "下雪",
      pinyin: "xiàxuě",
    },
  },
  {
    word: {
      chinese: "刮风",
      pinyin: "guāfēng",
    },
  },
  {
    word: {
      chinese: "春天",
      pinyin: "chūntiān",
    },
  },
  {
    word: {
      chinese: "夏天",
      pinyin: "xiàtiān",
    },
  },
  {
    word: {
      chinese: "秋天",
      pinyin: "qiūtiān",
    },
  },
  {
    word: {
      chinese: "冬天",
      pinyin: "dōngtiān",
    },
  },
  "Phone-Calls",
  {
    word: {
      chinese: "喂",
      pinyin: "wèi",
    },
  },
  {
    word: {
      chinese: "找",
      pinyin: "zhǎo",
    },
  },
  {
    word: {
      chinese: "先生",
      pinyin: "xiānsheng",
    },
  },
  {
    word: {
      chinese: "女士",
      pinyin: "nǚshì",
    },
  },
  {
    word: {
      chinese: "了",
      pinyin: "le",
    },
  },
  {
    word: {
      chinese: "已经",
      pinyin: "yǐjing",
    },
  },
  {
    word: {
      chinese: "看见",
      pinyin: "kànjian",
    },
  },
  "Communications",
  {
    word: {
      chinese: "给",
      pinyin: "gěi",
    },
  },
  {
    word: {
      chinese: "打",
      pinyin: "dǎ",
    },
  },
  {
    word: {
      chinese: "发",
      pinyin: "fā",
    },
  },
  {
    word: {
      chinese: "电话",
      pinyin: "diànhuà",
    },
  },
  {
    word: {
      chinese: "短信",
      pinyin: "duǎnxìn",
    },
  },
  {
    word: {
      chinese: "邮件",
      pinyin: "yóujiàn",
    },
  },
  {
    word: {
      chinese: "微信",
      pinyin: "Wēixìn",
    },
  },
  {
    word: {
      chinese: "到",
      pinyin: "dào",
    },
  },
  {
    word: {
      chinese: "接",
      pinyin: "jiē",
    },
  },
  {
    word: {
      chinese: "收",
      pinyin: "shōu",
    },
  },
  {
    word: {
      chinese: "…的时候",
      pinyin: "…deshíhòu",
    },
  },
  {
    word: {
      chinese: "散步",
      pinyin: "sànbù",
    },
  },
  {
    word: {
      chinese: "等",
      pinyin: "děng",
    },
  },
  {
    word: {
      chinese: "健身",
      pinyin: "jiànshēn",
    },
  },
  {
    word: {
      chinese: "东西",
      pinyin: "dōngxi",
    },
  },
  "Sweets",
  {
    word: {
      chinese: "块",
      pinyin: "kuài",
    },
  },
  {
    word: {
      chinese: "蛋糕",
      pinyin: "dàngāo",
    },
  },
  {
    word: {
      chinese: "巧克力",
      pinyin: "qiǎokèlì",
    },
  },
  {
    word: {
      chinese: "刚才",
      pinyin: "gāngcái",
    },
  },
  {
    word: {
      chinese: "种",
      pinyin: "zhǒng",
    },
  },
  {
    word: {
      chinese: "片",
      pinyin: "piàn",
    },
  },
  {
    word: {
      chinese: "咖啡店",
      pinyin: "kāfēidiàn",
    },
  },
  {
    word: {
      chinese: "面包店",
      pinyin: "miànbāodiàn",
    },
  },
  "Pets",
  {
    word: {
      chinese: "养",
      pinyin: "yǎng",
    },
  },
  {
    word: {
      chinese: "可爱",
      pinyin: "kěài",
    },
  },
  {
    word: {
      chinese: "听话",
      pinyin: "tīnghuà",
    },
  },
  {
    word: {
      chinese: "只",
      pinyin: "zhī",
    },
  },
  {
    word: {
      chinese: "鸟",
      pinyin: "niǎo",
    },
  },
  {
    word: {
      chinese: "兔子",
      pinyin: "tùzi",
    },
  },
  {
    word: {
      chinese: "的",
      pinyin: "de",
    },
  },
  {
    word: {
      chinese: "乖",
      pinyin: "guāi",
    },
  },
  {
    word: {
      chinese: "懒",
      pinyin: "lǎn",
    },
  },
  {
    word: {
      chinese: "傻",
      pinyin: "shǎ",
    },
  },
  {
    word: {
      chinese: "丑",
      pinyin: "chǒu",
    },
  },
  {
    word: {
      chinese: "鱼",
      pinyin: "yú",
    },
  },
  {
    word: {
      chinese: "敢",
      pinyin: "gǎn",
    },
  },
  {
    word: {
      chinese: "摸",
      pinyin: "mō",
    },
  },
  {
    word: {
      chinese: "出门",
      pinyin: "chūmén",
    },
  },
  {
    word: {
      chinese: "电梯",
      pinyin: "diàntī",
    },
  },
  "Suggestions",
  {
    word: {
      chinese: "了",
      pinyin: "le",
    },
  },
  {
    word: {
      chinese: "饿",
      pinyin: "è",
    },
  },
  {
    word: {
      chinese: "渴",
      pinyin: "kě",
    },
  },
  {
    word: {
      chinese: "困",
      pinyin: "kùn",
    },
  },
  {
    word: {
      chinese: "累",
      pinyin: "lèi",
    },
  },
  {
    word: {
      chinese: "饱",
      pinyin: "bǎo",
    },
  },
  {
    word: {
      chinese: "吧",
      pinyin: "ba",
    },
  },
  {
    word: {
      chinese: "请",
      pinyin: "qǐng",
    },
  },
  {
    word: {
      chinese: "送",
      pinyin: "sòng",
    },
  },
  {
    word: {
      chinese: "陪",
      pinyin: "péi",
    },
  },
  "Health",
  {
    word: {
      chinese: "怎么",
      pinyin: "zěnme",
    },
  },
  {
    word: {
      chinese: "疼",
      pinyin: "téng",
    },
  },
  {
    word: {
      chinese: "头",
      pinyin: "tóu",
    },
  },
  {
    word: {
      chinese: "肚子",
      pinyin: "dùzi",
    },
  },
  {
    word: {
      chinese: "牙",
      pinyin: "yá",
    },
  },
  {
    word: {
      chinese: "可能",
      pinyin: "kěnéng",
    },
  },
  {
    word: {
      chinese: "应该",
      pinyin: "yīnggāi",
    },
  },
  {
    word: {
      chinese: "休息",
      pinyin: "xiūxi",
    },
  },
  {
    word: {
      chinese: "感冒",
      pinyin: "gǎnmào",
    },
  },
  {
    word: {
      chinese: "发烧",
      pinyin: "fāshāo",
    },
  },
  {
    word: {
      chinese: "药",
      pinyin: "yào",
    },
  },
  {
    word: {
      chinese: "别",
      pinyin: "bié",
    },
  },
  {
    word: {
      chinese: "咳嗽",
      pinyin: "késou",
    },
  },
  {
    word: {
      chinese: "说话",
      pinyin: "shuōhuà",
    },
  },
  {
    word: {
      chinese: "舒服",
      pinyin: "shūfu",
    },
  },
  {
    word: {
      chinese: "让",
      pinyin: "ràng",
    },
  },
  {
    word: {
      chinese: "打针",
      pinyin: "dǎzhēn",
    },
  },
  {
    word: {
      chinese: "住院",
      pinyin: "zhùyuàn",
    },
  },
  {
    word: {
      chinese: "生病",
      pinyin: "shēngbìng",
    },
  },
  "Ordering Food",
  {
    word: {
      chinese: "点菜",
      pinyin: "diǎncài",
    },
  },
  {
    word: {
      chinese: "买单",
      pinyin: "mǎidān",
    },
  },
  {
    word: {
      chinese: "打包",
      pinyin: "dǎbāo",
    },
  },
  {
    word: {
      chinese: "菜单",
      pinyin: "càidān",
    },
  },
  {
    word: {
      chinese: "一共",
      pinyin: "yīgòng",
    },
  },
  {
    word: {
      chinese: "主食",
      pinyin: "zhǔshí",
    },
  },
  {
    word: {
      chinese: "饮料",
      pinyin: "yǐnliào",
    },
  },
  "Restaurants 2",
  {
    word: {
      chinese: "几",
      pinyin: "jǐ",
    },
  },
  {
    word: {
      chinese: "特别",
      pinyin: "tèbié",
    },
  },
  {
    word: {
      chinese: "有名",
      pinyin: "yǒumíng",
    },
  },
  {
    word: {
      chinese: "烫",
      pinyin: "tàng",
    },
  },
  {
    word: {
      chinese: "热闹",
      pinyin: "rènao",
    },
  },
  {
    word: {
      chinese: "态度",
      pinyin: "tàidu",
    },
  },
  {
    word: {
      chinese: "味道",
      pinyin: "wèidao",
    },
  },
  {
    word: {
      chinese: "先",
      pinyin: "xiān",
    },
  },
  {
    word: {
      chinese: "再",
      pinyin: "zài",
    },
  },
  {
    word: {
      chinese: "小吃",
      pinyin: "xiǎochī",
    },
  },
  "Helping Out",
  {
    word: {
      chinese: "一下",
      pinyin: "yīxià",
    },
  },
  {
    word: {
      chinese: "开",
      pinyin: "kāi",
    },
  },
  {
    word: {
      chinese: "关",
      pinyin: "guān",
    },
  },
  {
    word: {
      chinese: "门",
      pinyin: "mén",
    },
  },
  {
    word: {
      chinese: "窗户",
      pinyin: "chuānghu",
    },
  },
  {
    word: {
      chinese: "当然",
      pinyin: "dāngrán",
    },
  },
  {
    word: {
      chinese: "帮",
      pinyin: "bāng",
    },
  },
  {
    word: {
      chinese: "拍",
      pinyin: "pāi",
    },
  },
  {
    word: {
      chinese: "搬",
      pinyin: "bān",
    },
  },
  {
    word: {
      chinese: "行李",
      pinyin: "xíngli",
    },
  },
  {
    word: {
      chinese: "照片",
      pinyin: "zhàopiàn",
    },
  },
  {
    word: {
      chinese: "换",
      pinyin: "huàn",
    },
  },
  {
    word: {
      chinese: "座位",
      pinyin: "zuòwèi",
    },
  },
  {
    word: {
      chinese: "谢谢",
      pinyin: "xièxie",
    },
  },
  {
    word: {
      chinese: "客气",
      pinyin: "kèqi",
    },
  },
  "Bargaining",
  {
    word: {
      chinese: "朵",
      pinyin: "duǒ",
    },
  },
  {
    word: {
      chinese: "斤",
      pinyin: "jīn",
    },
  },
  {
    word: {
      chinese: "花",
      pinyin: "huā",
    },
  },
  {
    word: {
      chinese: "香蕉",
      pinyin: "xiāngjiāo",
    },
  },
  {
    word: {
      chinese: "葡萄",
      pinyin: "pútao",
    },
  },
  {
    word: {
      chinese: "卖",
      pinyin: "mài",
    },
  },
  {
    word: {
      chinese: "挑",
      pinyin: "tiāo",
    },
  },
  {
    word: {
      chinese: "新鲜",
      pinyin: "xīnxiān",
    },
  },
  {
    word: {
      chinese: "西红柿",
      pinyin: "xīhóngshì",
    },
  },
  {
    word: {
      chinese: "蘑菇",
      pinyin: "mógu",
    },
  },
  {
    word: {
      chinese: "黄瓜",
      pinyin: "huánggua",
    },
  },
  {
    word: {
      chinese: "生菜",
      pinyin: "shēngcài",
    },
  },
  {
    word: {
      chinese: "只",
      pinyin: "zhǐ",
    },
  },
  {
    word: {
      chinese: "行",
      pinyin: "xíng",
    },
  },
  {
    word: {
      chinese: "再",
      pinyin: "zài",
    },
  },
  "Learning Chinese 2",
  {
    word: {
      chinese: "为了",
      pinyin: "wèile",
    },
  },
  {
    word: {
      chinese: "决定",
      pinyin: "juédìng",
    },
  },
  {
    word: {
      chinese: "了解",
      pinyin: "liǎojiě",
    },
  },
  {
    word: {
      chinese: "工作",
      pinyin: "gōngzuò",
    },
  },
  {
    word: {
      chinese: "留学",
      pinyin: "liúxué",
    },
  },
  {
    word: {
      chinese: "文化",
      pinyin: "wénhuà",
    },
  },
  {
    word: {
      chinese: "认为",
      pinyin: "rènwéi",
    },
  },
  {
    word: {
      chinese: "难",
      pinyin: "nán",
    },
  },
  {
    word: {
      chinese: "简单",
      pinyin: "jiǎndān",
    },
  },
  {
    word: {
      chinese: "多久",
      pinyin: "duō jiǔ",
    },
  },
  {
    word: {
      chinese: "小时",
      pinyin: "xiǎoshí",
    },
  },
  {
    word: {
      chinese: "分钟",
      pinyin: "fēnzhōng",
    },
  },
  {
    word: {
      chinese: "一会儿",
      pinyin: "yīhuìr",
    },
  },
  "School",
  {
    word: {
      chinese: "上",
      pinyin: "shàng",
    },
  },
  {
    word: {
      chinese: "大学",
      pinyin: "dàxué",
    },
  },
  {
    word: {
      chinese: "年级",
      pinyin: "niánjí",
    },
  },
  {
    word: {
      chinese: "专业",
      pinyin: "zhuānyè",
    },
  },
  {
    word: {
      chinese: "经济",
      pinyin: "jīngjì",
    },
  },
  {
    word: {
      chinese: "历史",
      pinyin: "lìshǐ",
    },
  },
  {
    word: {
      chinese: "法律",
      pinyin: "fǎlǜ",
    },
  },
  {
    word: {
      chinese: "里边",
      pinyin: "lǐbian",
    },
  },
  {
    word: {
      chinese: "外边",
      pinyin: "wàibian",
    },
  },
  {
    word: {
      chinese: "图书馆",
      pinyin: "túshūguǎn",
    },
  },
  {
    word: {
      chinese: "教室",
      pinyin: "jiàoshì",
    },
  },
  {
    word: {
      chinese: "宿舍",
      pinyin: "sùshè",
    },
  },
  {
    word: {
      chinese: "食堂",
      pinyin: "shítáng",
    },
  },
  {
    word: {
      chinese: "该",
      pinyin: "gāi",
    },
  },
  {
    word: {
      chinese: "考试",
      pinyin: "kǎoshì",
    },
  },
  {
    word: {
      chinese: "毕业",
      pinyin: "bìyè",
    },
  },
  {
    word: {
      chinese: "复习",
      pinyin: "fùxí",
    },
  },
  {
    word: {
      chinese: "学习",
      pinyin: "xuéxí",
    },
  },
  {
    word: {
      chinese: "作业",
      pinyin: "zuòyè",
    },
  },
  {
    word: {
      chinese: "些",
      pinyin: "xiē",
    },
  },
  {
    word: {
      chinese: "以前",
      pinyin: "yǐqián",
    },
  },
  {
    word: {
      chinese: "以后",
      pinyin: "yǐhòu",
    },
  },
  {
    word: {
      chinese: "放",
      pinyin: "fàng",
    },
  },
  {
    word: {
      chinese: "寒假",
      pinyin: "hánjià",
    },
  },
  {
    word: {
      chinese: "暑假",
      pinyin: "shǔjià",
    },
  },
  "Dating",
  {
    word: {
      chinese: "愿意",
      pinyin: "yuànyi",
    },
  },
  {
    word: {
      chinese: "一直",
      pinyin: "yīzhí",
    },
  },
  {
    word: {
      chinese: "当",
      pinyin: "dāng",
    },
  },
  {
    word: {
      chinese: "男朋友",
      pinyin: "nánpéngyou",
    },
  },
  {
    word: {
      chinese: "女朋友",
      pinyin: "nǚpéngyou",
    },
  },
  {
    word: {
      chinese: "见面",
      pinyin: "jiànmiàn",
    },
  },
  {
    word: {
      chinese: "分手",
      pinyin: "fēnshǒu",
    },
  },
  {
    word: {
      chinese: "吵架",
      pinyin: "chǎojià",
    },
  },
  {
    word: {
      chinese: "道歉",
      pinyin: "dàoqiàn",
    },
  },
  {
    word: {
      chinese: "要",
      pinyin: "yào",
    },
  },
  {
    word: {
      chinese: "离婚",
      pinyin: "líhūn",
    },
  },
  {
    word: {
      chinese: "结婚",
      pinyin: "jiéhūn",
    },
  },
  {
    word: {
      chinese: "谈恋爱",
      pinyin: "tán liànài",
    },
  },
  {
    word: {
      chinese: "因为",
      pinyin: "yīnwèi",
    },
  },
  {
    word: {
      chinese: "所以",
      pinyin: "suǒyǐ",
    },
  },
  {
    word: {
      chinese: "高兴",
      pinyin: "gāoxìng",
    },
  },
  {
    word: {
      chinese: "难过",
      pinyin: "nánguò",
    },
  },
  "Feelings",
  {
    word: {
      chinese: "不要",
      pinyin: "bùyào",
    },
  },
  {
    word: {
      chinese: "这么",
      pinyin: "zhème",
    },
  },
  {
    word: {
      chinese: "害怕",
      pinyin: "hàipà",
    },
  },
  {
    word: {
      chinese: "紧张",
      pinyin: "jǐnzhāng",
    },
  },
  {
    word: {
      chinese: "生气",
      pinyin: "shēngqì",
    },
  },
  {
    word: {
      chinese: "为什么",
      pinyin: "wèishénme",
    },
  },
  {
    word: {
      chinese: "开心",
      pinyin: "kāixīn",
    },
  },
  {
    word: {
      chinese: "伤心",
      pinyin: "shāngxīn",
    },
  },
  {
    word: {
      chinese: "地",
      pinyin: "de",
    },
  },
  {
    word: {
      chinese: "笑",
      pinyin: "xiào",
    },
  },
  {
    word: {
      chinese: "哭",
      pinyin: "kū",
    },
  },
  {
    word: {
      chinese: "为",
      pinyin: "wèi",
    },
  },
  {
    word: {
      chinese: "担心",
      pinyin: "dānxīn",
    },
  },
  "Family 2",
  {
    word: {
      chinese: "可是",
      pinyin: "kěshì",
    },
  },
  {
    word: {
      chinese: "聪明",
      pinyin: "cōngming",
    },
  },
  {
    word: {
      chinese: "笨",
      pinyin: "bèn",
    },
  },
  {
    word: {
      chinese: "老",
      pinyin: "lǎo",
    },
  },
  {
    word: {
      chinese: "年轻",
      pinyin: "niánqīng",
    },
  },
  {
    word: {
      chinese: "老婆",
      pinyin: "lǎopo",
    },
  },
  {
    word: {
      chinese: "老公",
      pinyin: "lǎogōng",
    },
  },
  {
    word: {
      chinese: "对",
      pinyin: "duì",
    },
  },
  {
    word: {
      chinese: "关心",
      pinyin: "guānxīn",
    },
  },
  {
    word: {
      chinese: "热情",
      pinyin: "rèqíng",
    },
  },
  {
    word: {
      chinese: "尊重",
      pinyin: "zūnzhòng",
    },
  },
  {
    word: {
      chinese: "严格",
      pinyin: "yángé",
    },
  },
  {
    word: {
      chinese: "孩子",
      pinyin: "háizi",
    },
  },
  {
    word: {
      chinese: "邻居",
      pinyin: "línjū",
    },
  },
  {
    word: {
      chinese: "越来越",
      pinyin: "yuèláiyuè",
    },
  },
  {
    word: {
      chinese: "淘气",
      pinyin: "táoqì",
    },
  },
  {
    word: {
      chinese: "儿子",
      pinyin: "érzi",
    },
  },
  {
    word: {
      chinese: "女儿",
      pinyin: "nǚér",
    },
  },
  "Career",
  {
    word: {
      chinese: "希望",
      pinyin: "xīwàng",
    },
  },
  {
    word: {
      chinese: "演员",
      pinyin: "yǎnyuán",
    },
  },
  {
    word: {
      chinese: "司机",
      pinyin: "sījī",
    },
  },
  {
    word: {
      chinese: "警察",
      pinyin: "jǐngchá",
    },
  },
  {
    word: {
      chinese: "律师",
      pinyin: "lǜshī",
    },
  },
  {
    word: {
      chinese: "虽然",
      pinyin: "suīrán",
    },
  },
  {
    word: {
      chinese: "但是",
      pinyin: "dànshì",
    },
  },
  {
    word: {
      chinese: "穷",
      pinyin: "qióng",
    },
  },
  {
    word: {
      chinese: "有钱",
      pinyin: "yǒuqián",
    },
  },
  {
    word: {
      chinese: "轻松",
      pinyin: "qīngsōng",
    },
  },
  {
    word: {
      chinese: "忙",
      pinyin: "máng",
    },
  },
  {
    word: {
      chinese: "除了",
      pinyin: "chúle",
    },
  },
  {
    word: {
      chinese: "记者",
      pinyin: "jìzhě",
    },
  },
  {
    word: {
      chinese: "设计师",
      pinyin: "shèjìshī",
    },
  },
  {
    word: {
      chinese: "护士",
      pinyin: "hùshi",
    },
  },
  {
    word: {
      chinese: "程序员",
      pinyin: "chéngxùyuán",
    },
  },
  "Traveling 1",
  {
    word: {
      chinese: "或者",
      pinyin: "huòzhě",
    },
  },
  {
    word: {
      chinese: "俄罗斯",
      pinyin: "E2luósī",
    },
  },
  {
    word: {
      chinese: "日本",
      pinyin: "Rìběn",
    },
  },
  {
    word: {
      chinese: "韩国",
      pinyin: "Hánguó",
    },
  },
  {
    word: {
      chinese: "泰国",
      pinyin: "Tàiguó",
    },
  },
  {
    word: {
      chinese: "过",
      pinyin: "guo",
    },
  },
  {
    word: {
      chinese: "法国",
      pinyin: "Fǎguó",
    },
  },
  {
    word: {
      chinese: "德国",
      pinyin: "Déguó",
    },
  },
  {
    word: {
      chinese: "英国",
      pinyin: "Yīngguó",
    },
  },
  {
    word: {
      chinese: "加拿大",
      pinyin: "Jiānádà",
    },
  },
  {
    word: {
      chinese: "带",
      pinyin: "dài",
    },
  },
  {
    word: {
      chinese: "国家",
      pinyin: "guójiā",
    },
  },
  {
    word: {
      chinese: "语言",
      pinyin: "yǔyán",
    },
  },
  {
    word: {
      chinese: "行李箱",
      pinyin: "xínglǐxiāng",
    },
  },
  "Going Abroad",
  {
    word: {
      chinese: "打算",
      pinyin: "dǎsuan",
    },
  },
  {
    word: {
      chinese: "出国",
      pinyin: "chūguó",
    },
  },
  {
    word: {
      chinese: "旅游",
      pinyin: "lǚyóu",
    },
  },
  {
    word: {
      chinese: "然后",
      pinyin: "ránhòu",
    },
  },
  {
    word: {
      chinese: "办",
      pinyin: "bàn",
    },
  },
  {
    word: {
      chinese: "预订",
      pinyin: "yùdìng",
    },
  },
  {
    word: {
      chinese: "签证",
      pinyin: "qiānzhèng",
    },
  },
  {
    word: {
      chinese: "护照",
      pinyin: "hùzhào",
    },
  },
  {
    word: {
      chinese: "票",
      pinyin: "piào",
    },
  },
  {
    word: {
      chinese: "就",
      pinyin: "jiù",
    },
  },
  {
    word: {
      chinese: "到",
      pinyin: "dào",
    },
  },
  {
    word: {
      chinese: "联系",
      pinyin: "liánxì",
    },
  },
  {
    word: {
      chinese: "寄",
      pinyin: "jì",
    },
  },
  {
    word: {
      chinese: "明信片",
      pinyin: "míngxìnpiàn",
    },
  },
  {
    word: {
      chinese: "要是",
      pinyin: "yàoshi",
    },
  },
  {
    word: {
      chinese: "就",
      pinyin: "jiù",
    },
  },
  {
    word: {
      chinese: "想",
      pinyin: "xiǎng",
    },
  },
  "Catching a Flight",
  {
    word: {
      chinese: "极了",
      pinyin: "jíle",
    },
  },
  {
    word: {
      chinese: "方便",
      pinyin: "fāngbiàn",
    },
  },
  {
    word: {
      chinese: "安全",
      pinyin: "ānquán",
    },
  },
  {
    word: {
      chinese: "危险",
      pinyin: "wēixiǎn",
    },
  },
  {
    word: {
      chinese: "快",
      pinyin: "kuài",
    },
  },
  {
    word: {
      chinese: "上",
      pinyin: "shàng",
    },
  },
  {
    word: {
      chinese: "下",
      pinyin: "xià",
    },
  },
  {
    word: {
      chinese: "起飞",
      pinyin: "qǐfēi",
    },
  },
  {
    word: {
      chinese: "降落",
      pinyin: "jiàngluò",
    },
  },
  {
    word: {
      chinese: "请",
      pinyin: "qǐng",
    },
  },
  {
    word: {
      chinese: "出示",
      pinyin: "chūshì",
    },
  },
  {
    word: {
      chinese: "您",
      pinyin: "nín",
    },
  },
  "Traveling 2",
  {
    word: {
      chinese: "是",
      pinyin: "shì",
    },
  },
  {
    word: {
      chinese: "的",
      pinyin: "de",
    },
  },
  {
    word: {
      chinese: "京剧",
      pinyin: "Jīngjù",
    },
  },
  {
    word: {
      chinese: "书法",
      pinyin: "shūfǎ",
    },
  },
  {
    word: {
      chinese: "白酒",
      pinyin: "báijiǔ",
    },
  },
  {
    word: {
      chinese: "烤鸭",
      pinyin: "kǎoyā",
    },
  },
  {
    word: {
      chinese: "长城",
      pinyin: "Chángchéng",
    },
  },
  {
    word: {
      chinese: "火车站",
      pinyin: "huǒchēzhàn",
    },
  },
  {
    word: {
      chinese: "动物园",
      pinyin: "dòngwùyuán",
    },
  },
  {
    word: {
      chinese: "公交车站",
      pinyin: "gōngjiāochē zhàn",
    },
  },
  "Renting",
  {
    word: {
      chinese: "还",
      pinyin: "hái",
    },
  },
  {
    word: {
      chinese: "安静",
      pinyin: "ānjìng",
    },
  },
  {
    word: {
      chinese: "吵",
      pinyin: "chǎo",
    },
  },
  {
    word: {
      chinese: "新",
      pinyin: "xīn",
    },
  },
  {
    word: {
      chinese: "旧",
      pinyin: "jiù",
    },
  },
  {
    word: {
      chinese: "家具",
      pinyin: "jiāju",
    },
  },
  {
    word: {
      chinese: "一样",
      pinyin: "yīyàng",
    },
  },
  {
    word: {
      chinese: "善良",
      pinyin: "shànliáng",
    },
  },
  {
    word: {
      chinese: "小气",
      pinyin: "xiǎoqì",
    },
  },
  {
    word: {
      chinese: "大方",
      pinyin: "dàfang",
    },
  },
  {
    word: {
      chinese: "房东",
      pinyin: "fángdōng",
    },
  },
  {
    word: {
      chinese: "多",
      pinyin: "duō",
    },
  },
  {
    word: {
      chinese: "少",
      pinyin: "shǎo",
    },
  },
  {
    word: {
      chinese: "房租",
      pinyin: "fángzū",
    },
  },
  {
    word: {
      chinese: "押金",
      pinyin: "yājīn",
    },
  },
  "Daily Life",
  {
    word: {
      chinese: "住",
      pinyin: "zhù",
    },
  },
  {
    word: {
      chinese: "城区",
      pinyin: "chéngqū",
    },
  },
  {
    word: {
      chinese: "郊区",
      pinyin: "jiāoqū",
    },
  },
  {
    word: {
      chinese: "农村",
      pinyin: "nóngcūn",
    },
  },
  {
    word: {
      chinese: "拿",
      pinyin: "ná",
    },
  },
  {
    word: {
      chinese: "杯子",
      pinyin: "bēizi",
    },
  },
  {
    word: {
      chinese: "盘子",
      pinyin: "pánzi",
    },
  },
  {
    word: {
      chinese: "瓶子",
      pinyin: "píngzi",
    },
  },
  {
    word: {
      chinese: "完",
      pinyin: "wán",
    },
  },
  {
    word: {
      chinese: "刷",
      pinyin: "shuā",
    },
  },
  {
    word: {
      chinese: "锅",
      pinyin: "guō",
    },
  },
  "Habits",
  {
    word: {
      chinese: "把",
      pinyin: "bǎ",
    },
  },
  {
    word: {
      chinese: "脱",
      pinyin: "tuō",
    },
  },
  {
    word: {
      chinese: "倒",
      pinyin: "dào",
    },
  },
  {
    word: {
      chinese: "擦",
      pinyin: "cā",
    },
  },
  {
    word: {
      chinese: "袜子",
      pinyin: "wàzi",
    },
  },
  {
    word: {
      chinese: "垃圾",
      pinyin: "lājī",
    },
  },
  {
    word: {
      chinese: "扔",
      pinyin: "rēng",
    },
  },
  {
    word: {
      chinese: "放",
      pinyin: "fàng",
    },
  },
  {
    word: {
      chinese: "沙发",
      pinyin: "shāfā",
    },
  },
  {
    word: {
      chinese: "钥匙",
      pinyin: "yàoshi",
    },
  },
  {
    word: {
      chinese: "地",
      pinyin: "dì",
    },
  },
  {
    word: {
      chinese: "送",
      pinyin: "sòng",
    },
  },
  {
    word: {
      chinese: "礼物",
      pinyin: "lǐwù",
    },
  },
  {
    word: {
      chinese: "包",
      pinyin: "bāo",
    },
  },
  {
    word: {
      chinese: "毛巾",
      pinyin: "máojīn",
    },
  },
  {
    word: {
      chinese: "牙膏",
      pinyin: "yágāo",
    },
  },
  {
    word: {
      chinese: "盐",
      pinyin: "yán",
    },
  },
  {
    word: {
      chinese: "醋",
      pinyin: "cù",
    },
  },
  {
    word: {
      chinese: "糖",
      pinyin: "táng",
    },
  },
  {
    word: {
      chinese: "酱油",
      pinyin: "jiàngyóu",
    },
  },
  {
    word: {
      chinese: "黑胡椒",
      pinyin: "hēihújiāo",
    },
  },
  "Mistakes",
  {
    word: {
      chinese: "又",
      pinyin: "yòu",
    },
  },
  {
    word: {
      chinese: "忘记",
      pinyin: "wàngjì",
    },
  },
  {
    word: {
      chinese: "对不起",
      pinyin: "duìbuqǐ",
    },
  },
  {
    word: {
      chinese: "笔",
      pinyin: "bǐ",
    },
  },
  {
    word: {
      chinese: "笔记本",
      pinyin: "bǐjìběn",
    },
  },
  {
    word: {
      chinese: "记",
      pinyin: "jì",
    },
  },
  {
    word: {
      chinese: "错",
      pinyin: "cuò",
    },
  },
  {
    word: {
      chinese: "时间",
      pinyin: "shíjiān",
    },
  },
  {
    word: {
      chinese: "名字",
      pinyin: "míngzi",
    },
  },
  {
    word: {
      chinese: "地址",
      pinyin: "dìzhǐ",
    },
  },
  {
    word: {
      chinese: "号码",
      pinyin: "hàomǎ",
    },
  },
  {
    word: {
      chinese: "以为",
      pinyin: "yǐwéi",
    },
  },
  {
    word: {
      chinese: "告诉",
      pinyin: "gàosu",
    },
  },
  {
    word: {
      chinese: "知道",
      pinyin: "zhīdao",
    },
  },
  {
    word: {
      chinese: "认识",
      pinyin: "rènshi",
    },
  },
  {
    word: {
      chinese: "讨厌",
      pinyin: "tǎoyàn",
    },
  },
  {
    word: {
      chinese: "记得",
      pinyin: "jìde",
    },
  },
  "Interviews",
  {
    word: {
      chinese: "着",
      pinyin: "zhe",
    },
  },
  {
    word: {
      chinese: "穿",
      pinyin: "chuān",
    },
  },
  {
    word: {
      chinese: "戴",
      pinyin: "dài",
    },
  },
  {
    word: {
      chinese: "眼镜",
      pinyin: "yǎnjìng",
    },
  },
  {
    word: {
      chinese: "西装",
      pinyin: "xīzhuāng",
    },
  },
  {
    word: {
      chinese: "皮鞋",
      pinyin: "píxié",
    },
  },
  {
    word: {
      chinese: "面试",
      pinyin: "miànshì",
    },
  },
  {
    word: {
      chinese: "简历",
      pinyin: "jiǎnlì",
    },
  },
  {
    word: {
      chinese: "挂",
      pinyin: "guà",
    },
  },
  {
    word: {
      chinese: "墙",
      pinyin: "qiáng",
    },
  },
  {
    word: {
      chinese: "地图",
      pinyin: "dìtú",
    },
  },
  {
    word: {
      chinese: "镜子",
      pinyin: "jìngzi",
    },
  },
  {
    word: {
      chinese: "办公室",
      pinyin: "bàngōngshì",
    },
  },
  {
    word: {
      chinese: "张",
      pinyin: "zhāng",
    },
  },
  {
    word: {
      chinese: "站",
      pinyin: "zhàn",
    },
  },
  {
    word: {
      chinese: "问",
      pinyin: "wèn",
    },
  },
  {
    word: {
      chinese: "回答",
      pinyin: "huídá",
    },
  },
  {
    word: {
      chinese: "介绍",
      pinyin: "jièshào",
    },
  },
  {
    word: {
      chinese: "问题",
      pinyin: "wèntí",
    },
  },
  {
    word: {
      chinese: "老板",
      pinyin: "lǎobǎn",
    },
  },
  {
    word: {
      chinese: "自己",
      pinyin: "zìjǐ",
    },
  },
  "Work",
  {
    word: {
      chinese: "就",
      pinyin: "jiù",
    },
  },
  {
    word: {
      chinese: "才",
      pinyin: "cái",
    },
  },
  {
    word: {
      chinese: "放假",
      pinyin: "fàngjià",
    },
  },
  {
    word: {
      chinese: "辞职",
      pinyin: "cízhí",
    },
  },
  {
    word: {
      chinese: "升职",
      pinyin: "shēngzhí",
    },
  },
  {
    word: {
      chinese: "涨",
      pinyin: "zhǎng",
    },
  },
  {
    word: {
      chinese: "工资",
      pinyin: "gōngzī",
    },
  },
  {
    word: {
      chinese: "奖金",
      pinyin: "jiǎngjīn",
    },
  },
  {
    word: {
      chinese: "上",
      pinyin: "shàng",
    },
  },
  {
    word: {
      chinese: "下",
      pinyin: "xià",
    },
  },
  {
    word: {
      chinese: "得",
      pinyin: "děi",
    },
  },
  {
    word: {
      chinese: "加班",
      pinyin: "jiābān",
    },
  },
  {
    word: {
      chinese: "开会",
      pinyin: "kāihuì",
    },
  },
  {
    word: {
      chinese: "出差",
      pinyin: "chūchāi",
    },
  },
  {
    word: {
      chinese: "迟到",
      pinyin: "chídào",
    },
  },
  {
    word: {
      chinese: "请假",
      pinyin: "qǐngjià",
    },
  },
  "Bad Luck",
  {
    word: {
      chinese: "一",
      pinyin: "yī",
    },
  },
  {
    word: {
      chinese: "堵车",
      pinyin: "dǔchē",
    },
  },
  {
    word: {
      chinese: "迷路",
      pinyin: "mílù",
    },
  },
  {
    word: {
      chinese: "遇到",
      pinyin: "yùdào",
    },
  },
  {
    word: {
      chinese: "被",
      pinyin: "bèi",
    },
  },
  {
    word: {
      chinese: "偷",
      pinyin: "tōu",
    },
  },
  {
    word: {
      chinese: "骗",
      pinyin: "piàn",
    },
  },
  {
    word: {
      chinese: "骂",
      pinyin: "mà",
    },
  },
  {
    word: {
      chinese: "照相机",
      pinyin: "zhàoxiàngjī",
    },
  },
  {
    word: {
      chinese: "花",
      pinyin: "huā",
    },
  },
  {
    word: {
      chinese: "弄",
      pinyin: "nòng",
    },
  },
  {
    word: {
      chinese: "丢",
      pinyin: "diū",
    },
  },
  {
    word: {
      chinese: "坏",
      pinyin: "huài",
    },
  },
  {
    word: {
      chinese: "破",
      pinyin: "pò",
    },
  },
  {
    word: {
      chinese: "光",
      pinyin: "guāng",
    },
  },
  {
    word: {
      chinese: "伞",
      pinyin: "sǎn",
    },
  },
  {
    word: {
      chinese: "冰激凌",
      pinyin: "bīngjilíng",
    },
  },
  {
    word: {
      chinese: "花生",
      pinyin: "huāshēng",
    },
  },
  "Greetings",
  {
    word: {
      chinese: "好像",
      pinyin: "hǎoxiàng",
    },
  },
  {
    word: {
      chinese: "见",
      pinyin: "jiàn",
    },
  },
  {
    word: {
      chinese: "挺",
      pinyin: "tǐng",
    },
  },
  {
    word: {
      chinese: "过",
      pinyin: "guò",
    },
  },
  {
    word: {
      chinese: "最近",
      pinyin: "zuìjìn",
    },
  },
  {
    word: {
      chinese: "叔叔",
      pinyin: "shūshu",
    },
  },
  {
    word: {
      chinese: "阿姨",
      pinyin: "āyí",
    },
  },
  {
    word: {
      chinese: "还",
      pinyin: "hái",
    },
  },
  {
    word: {
      chinese: "俩",
      pinyin: "liǎ",
    },
  },
  {
    word: {
      chinese: "咱们",
      pinyin: "zánmen",
    },
  },
  {
    word: {
      chinese: "保持",
      pinyin: "bǎochí",
    },
  },
  {
    word: {
      chinese: "永远",
      pinyin: "yǒngyuǎn",
    },
  },
  {
    word: {
      chinese: "聚会",
      pinyin: "jùhuì",
    },
  },
  "Online Shopping",
  {
    word: {
      chinese: "马上",
      pinyin: "mǎshàng",
    },
  },
  {
    word: {
      chinese: "下单",
      pinyin: "xiàdān",
    },
  },
  {
    word: {
      chinese: "付款",
      pinyin: "fùkuǎn",
    },
  },
  {
    word: {
      chinese: "快递",
      pinyin: "kuàidì",
    },
  },
  {
    word: {
      chinese: "天",
      pinyin: "tiān",
    },
  },
  {
    word: {
      chinese: "于是",
      pinyin: "yúshì",
    },
  },
  {
    word: {
      chinese: "退",
      pinyin: "tuì",
    },
  },
  {
    word: {
      chinese: "假",
      pinyin: "jià",
    },
  },
  {
    word: {
      chinese: "合适",
      pinyin: "héshì",
    },
  },
  {
    word: {
      chinese: "它",
      pinyin: "tā",
    },
  },
  "Office Work",
  {
    word: {
      chinese: "根据",
      pinyin: "gēnjù",
    },
  },
  {
    word: {
      chinese: "修改",
      pinyin: "xiūgǎi",
    },
  },
  {
    word: {
      chinese: "要求",
      pinyin: "yāoqiú",
    },
  },
  {
    word: {
      chinese: "规定",
      pinyin: "guīdìng",
    },
  },
  {
    word: {
      chinese: "合同",
      pinyin: "hétong",
    },
  },
  {
    word: {
      chinese: "客户",
      pinyin: "kèhù",
    },
  },
  {
    word: {
      chinese: "打印",
      pinyin: "dǎyìn",
    },
  },
  {
    word: {
      chinese: "复印",
      pinyin: "fùyìn",
    },
  },
  {
    word: {
      chinese: "通知",
      pinyin: "tōngzhī",
    },
  },
  {
    word: {
      chinese: "翻译",
      pinyin: "fānyì",
    },
  },
  {
    word: {
      chinese: "讨论",
      pinyin: "tǎolùn",
    },
  },
  {
    word: {
      chinese: "文件",
      pinyin: "wénjiàn",
    },
  },
  {
    word: {
      chinese: "按照",
      pinyin: "ànzhào",
    },
  },
  {
    word: {
      chinese: "做",
      pinyin: "zuò",
    },
  },
  {
    word: {
      chinese: "教",
      pinyin: "jiāo",
    },
  },
  {
    word: {
      chinese: "建议",
      pinyin: "jiànyì",
    },
  },
  {
    word: {
      chinese: "商量",
      pinyin: "shāngliang",
    },
  },
  {
    word: {
      chinese: "次",
      pinyin: "cì",
    },
  },
  {
    word: {
      chinese: "赵",
      pinyin: "Zhào",
    },
  },
  {
    word: {
      chinese: "遍",
      pinyin: "biàn",
    },
  },
  {
    word: {
      chinese: "只要",
      pinyin: "zhǐyào",
    },
  },
  {
    word: {
      chinese: "接受",
      pinyin: "jiēshòu",
    },
  },
  {
    word: {
      chinese: "拒绝",
      pinyin: "jùjué",
    },
  },
  {
    word: {
      chinese: "签",
      pinyin: "qiān",
    },
  },
  {
    word: {
      chinese: "条件",
      pinyin: "tiáojiàn",
    },
  },
  {
    word: {
      chinese: "意见",
      pinyin: "yìjian",
    },
  },
  "Sports Competitions",
  {
    word: {
      chinese: "终于",
      pinyin: "zhōngyú",
    },
  },
  {
    word: {
      chinese: "开始",
      pinyin: "kāishǐ",
    },
  },
  {
    word: {
      chinese: "结束",
      pinyin: "jiéshù",
    },
  },
  {
    word: {
      chinese: "比赛",
      pinyin: "bǐsài",
    },
  },
  {
    word: {
      chinese: "场",
      pinyin: "chǎng",
    },
  },
  {
    word: {
      chinese: "如果",
      pinyin: "rúguǒ",
    },
  },
  {
    word: {
      chinese: "得",
      pinyin: "dé",
    },
  },
  {
    word: {
      chinese: "输",
      pinyin: "shū",
    },
  },
  {
    word: {
      chinese: "赢",
      pinyin: "yíng",
    },
  },
  {
    word: {
      chinese: "冠军",
      pinyin: "guànjūn",
    },
  },
  {
    word: {
      chinese: "队",
      pinyin: "duì",
    },
  },
  {
    word: {
      chinese: "即使",
      pinyin: "jíshǐ",
    },
  },
  {
    word: {
      chinese: "支持",
      pinyin: "zhīchí",
    },
  },
  {
    word: {
      chinese: "名",
      pinyin: "míng",
    },
  },
  "Gossip",
  {
    word: {
      chinese: "准备",
      pinyin: "zhǔnbèi",
    },
  },
  {
    word: {
      chinese: "听说",
      pinyin: "tīngshuō",
    },
  },
  {
    word: {
      chinese: "总是",
      pinyin: "zǒngshì",
    },
  },
  {
    word: {
      chinese: "怀疑",
      pinyin: "huáiyí",
    },
  },
  {
    word: {
      chinese: "麻烦",
      pinyin: "máfan",
    },
  },
  {
    word: {
      chinese: "误会",
      pinyin: "wùhuì",
    },
  },
  {
    word: {
      chinese: "笑话",
      pinyin: "xiàohua",
    },
  },
  {
    word: {
      chinese: "别人",
      pinyin: "biéren",
    },
  },
  {
    word: {
      chinese: "其实",
      pinyin: "qíshí",
    },
  },
  {
    word: {
      chinese: "消息",
      pinyin: "xiāoxi",
    },
  },
  {
    word: {
      chinese: "秘密",
      pinyin: "mìmì",
    },
  },
  {
    word: {
      chinese: "故事",
      pinyin: "gùshi",
    },
  },
  {
    word: {
      chinese: "大家",
      pinyin: "dàjiā",
    },
  },
  "Hiking",
  {
    word: {
      chinese: "出来",
      pinyin: "chūlai",
    },
  },
  {
    word: {
      chinese: "进去",
      pinyin: "jìnqu",
    },
  },
  {
    word: {
      chinese: "入口",
      pinyin: "rùkǒu",
    },
  },
  {
    word: {
      chinese: "出口",
      pinyin: "chūkǒu",
    },
  },
  {
    word: {
      chinese: "上来",
      pinyin: "shànglai",
    },
  },
  {
    word: {
      chinese: "下去",
      pinyin: "xiàqu",
    },
  },
  {
    word: {
      chinese: "跳",
      pinyin: "tiào",
    },
  },
  {
    word: {
      chinese: "爬",
      pinyin: "pá",
    },
  },
  {
    word: {
      chinese: "过来",
      pinyin: "guòlai",
    },
  },
  {
    word: {
      chinese: "过去",
      pinyin: "guòqu",
    },
  },
  "Comparing",
  {
    word: {
      chinese: "与",
      pinyin: "yǔ",
    },
  },
  {
    word: {
      chinese: "差不多",
      pinyin: "chàbuduō",
    },
  },
  {
    word: {
      chinese: "收入",
      pinyin: "shōurù",
    },
  },
  {
    word: {
      chinese: "年龄",
      pinyin: "niánlíng",
    },
  },
  {
    word: {
      chinese: "经历",
      pinyin: "jīnglì",
    },
  },
  {
    word: {
      chinese: "学历",
      pinyin: "xuélì",
    },
  },
  {
    word: {
      chinese: "赚",
      pinyin: "zhuàn",
    },
  },
  {
    word: {
      chinese: "存",
      pinyin: "cún",
    },
  },
  {
    word: {
      chinese: "早",
      pinyin: "zǎo",
    },
  },
  {
    word: {
      chinese: "晚",
      pinyin: "wǎn",
    },
  },
  {
    word: {
      chinese: "千",
      pinyin: "qiān",
    },
  },
  {
    word: {
      chinese: "万",
      pinyin: "wàn",
    },
  },
  {
    word: {
      chinese: "不如",
      pinyin: "bùrú",
    },
  },
  {
    word: {
      chinese: "成功",
      pinyin: "chénggōng",
    },
  },
  {
    word: {
      chinese: "诚实",
      pinyin: "chéngshí",
    },
  },
  {
    word: {
      chinese: "优秀",
      pinyin: "yōuxiù",
    },
  },
  {
    word: {
      chinese: "勇敢",
      pinyin: "yǒnggǎn",
    },
  },
  {
    word: {
      chinese: "自信",
      pinyin: "zìxìn",
    },
  },
  {
    word: {
      chinese: "考虑",
      pinyin: "kǎolǜ",
    },
  },
  {
    word: {
      chinese: "流利",
      pinyin: "liúlì",
    },
  },
  {
    word: {
      chinese: "仔细",
      pinyin: "zǐxì",
    },
  },
  "Arguments",
  {
    word: {
      chinese: "怎么",
      pinyin: "zěnme",
    },
  },
  {
    word: {
      chinese: "老",
      pinyin: "lǎo",
    },
  },
  {
    word: {
      chinese: "抽烟",
      pinyin: "chōuyān",
    },
  },
  {
    word: {
      chinese: "批评",
      pinyin: "pīpíng",
    },
  },
  {
    word: {
      chinese: "熬夜",
      pinyin: "áoyè",
    },
  },
  {
    word: {
      chinese: "答应",
      pinyin: "dāying",
    },
  },
  {
    word: {
      chinese: "提醒",
      pinyin: "tíxǐng",
    },
  },
  {
    word: {
      chinese: "原谅",
      pinyin: "yuánliàng",
    },
  },
  {
    word: {
      chinese: "承认",
      pinyin: "chéngrèn",
    },
  },
  {
    word: {
      chinese: "同意",
      pinyin: "tóngyì",
    },
  },
  {
    word: {
      chinese: "讲",
      pinyin: "jiǎng",
    },
  },
  {
    word: {
      chinese: "错误",
      pinyin: "cuòwù",
    },
  },
  {
    word: {
      chinese: "道理",
      pinyin: "dàoli",
    },
  },
  {
    word: {
      chinese: "越",
      pinyin: "yuè",
    },
  },
  {
    word: {
      chinese: "解释",
      pinyin: "jiěshì",
    },
  },
  {
    word: {
      chinese: "吵",
      pinyin: "chǎo",
    },
  },
  {
    word: {
      chinese: "激动",
      pinyin: "jīdòng",
    },
  },
  {
    word: {
      chinese: "厉害",
      pinyin: "lìhai",
    },
  },
  "Personality",
  {
    word: {
      chinese: "多么",
      pinyin: "duōme",
    },
  },
  {
    word: {
      chinese: "啊",
      pinyin: "a",
    },
  },
  {
    word: {
      chinese: "浪漫",
      pinyin: "làngmàn",
    },
  },
  {
    word: {
      chinese: "幽默",
      pinyin: "yōumò",
    },
  },
  {
    word: {
      chinese: "活泼",
      pinyin: "huópo",
    },
  },
  {
    word: {
      chinese: "努力",
      pinyin: "nǔlì",
    },
  },
  {
    word: {
      chinese: "各",
      pinyin: "gè",
    },
  },
  {
    word: {
      chinese: "参加",
      pinyin: "cānjiā",
    },
  },
  {
    word: {
      chinese: "优点",
      pinyin: "yōudiǎn",
    },
  },
  {
    word: {
      chinese: "缺点",
      pinyin: "quēdiǎn",
    },
  },
  {
    word: {
      chinese: "活动",
      pinyin: "huódòng",
    },
  },
  {
    word: {
      chinese: "感兴趣",
      pinyin: "gǎn xìngqù",
    },
  },
  {
    word: {
      chinese: "熟悉",
      pinyin: "shúxī",
    },
  },
  {
    word: {
      chinese: "重视",
      pinyin: "zhòngshì",
    },
  },
  {
    word: {
      chinese: "礼貌",
      pinyin: "lǐmào",
    },
  },
  {
    word: {
      chinese: "耐心",
      pinyin: "nàixīn",
    },
  },
  "Praise",
  {
    word: {
      chinese: "不但",
      pinyin: "bùdàn",
    },
  },
  {
    word: {
      chinese: "而且",
      pinyin: "érqiě",
    },
  },
  {
    word: {
      chinese: "从来",
      pinyin: "cónglái",
    },
  },
  {
    word: {
      chinese: "说谎",
      pinyin: "shuōhuǎng",
    },
  },
  {
    word: {
      chinese: "犯",
      pinyin: "fàn",
    },
  },
  {
    word: {
      chinese: "不管",
      pinyin: "bùguǎn",
    },
  },
  {
    word: {
      chinese: "放弃",
      pinyin: "fàngqì",
    },
  },
  {
    word: {
      chinese: "解决",
      pinyin: "jiějué",
    },
  },
  {
    word: {
      chinese: "困难",
      pinyin: "kùnnan",
    },
  },
  {
    word: {
      chinese: "十分",
      pinyin: "shífēn",
    },
  },
  {
    word: {
      chinese: "幸福",
      pinyin: "xìngfú",
    },
  },
  {
    word: {
      chinese: "感动",
      pinyin: "gǎndòng",
    },
  },
  {
    word: {
      chinese: "愉快",
      pinyin: "yúkuài",
    },
  },
  {
    word: {
      chinese: "兴奋",
      pinyin: "xīngfèn",
    },
  },
  {
    word: {
      chinese: "吃惊",
      pinyin: "chījīng",
    },
  },
  "Weight Loss",
  {
    word: {
      chinese: "尽管",
      pinyin: "jǐnguǎn",
    },
  },
  {
    word: {
      chinese: "减肥",
      pinyin: "jiǎnféi",
    },
  },
  {
    word: {
      chinese: "锻炼",
      pinyin: "duànliàn",
    },
  },
  {
    word: {
      chinese: "坚持",
      pinyin: "jiānchí",
    },
  },
  {
    word: {
      chinese: "辛苦",
      pinyin: "xīnkǔ",
    },
  },
  {
    word: {
      chinese: "身材",
      pinyin: "shēncái",
    },
  },
  {
    word: {
      chinese: "快餐",
      pinyin: "kuàicān",
    },
  },
  {
    word: {
      chinese: "蔬菜",
      pinyin: "shūcài",
    },
  },
  {
    word: {
      chinese: "牛肉",
      pinyin: "niúròu",
    },
  },
  {
    word: {
      chinese: "鸡肉",
      pinyin: "jīròu",
    },
  },
  {
    word: {
      chinese: "否则",
      pinyin: "fǒuzé",
    },
  },
  {
    word: {
      chinese: "节食",
      pinyin: "jiéshí",
    },
  },
  {
    word: {
      chinese: "难受",
      pinyin: "nánshòu",
    },
  },
  {
    word: {
      chinese: "身体",
      pinyin: "shēntǐ",
    },
  },
  {
    word: {
      chinese: "皮肤",
      pinyin: "pífū",
    },
  },
  "Housework",
  {
    word: {
      chinese: "整理",
      pinyin: "zhěnglǐ",
    },
  },
  {
    word: {
      chinese: "修理",
      pinyin: "xiūlǐ",
    },
  },
  {
    word: {
      chinese: "杂志",
      pinyin: "zázhì",
    },
  },
  {
    word: {
      chinese: "空调",
      pinyin: "kōngtiáo",
    },
  },
  {
    word: {
      chinese: "取",
      pinyin: "qǔ",
    },
  },
  {
    word: {
      chinese: "回来",
      pinyin: "huílai",
    },
  },
  {
    word: {
      chinese: "外卖",
      pinyin: "wàimài",
    },
  },
  {
    word: {
      chinese: "脏",
      pinyin: "zāng",
    },
  },
  {
    word: {
      chinese: "倒",
      pinyin: "dǎo",
    },
  },
  {
    word: {
      chinese: "地毯",
      pinyin: "dìtǎn",
    },
  },
  {
    word: {
      chinese: "花瓶",
      pinyin: "huāpíng",
    },
  },
  "Movies",
  {
    word: {
      chinese: "懂",
      pinyin: "dǒng",
    },
  },
  {
    word: {
      chinese: "清楚",
      pinyin: "qīngchu",
    },
  },
  {
    word: {
      chinese: "暗",
      pinyin: "àn",
    },
  },
  {
    word: {
      chinese: "电影院",
      pinyin: "diànyǐngyuàn",
    },
  },
  {
    word: {
      chinese: "了",
      pinyin: "liǎo",
    },
  },
  {
    word: {
      chinese: "爆米花",
      pinyin: "bàomǐhuā",
    },
  },
  {
    word: {
      chinese: "桶",
      pinyin: "tǒng",
    },
  },
  {
    word: {
      chinese: "出",
      pinyin: "chū",
    },
  },
  {
    word: {
      chinese: "进",
      pinyin: "jìn",
    },
  },
  "Apologizing",
  {
    word: {
      chinese: "因此",
      pinyin: "yīncǐ",
    },
  },
  {
    word: {
      chinese: "照顾",
      pinyin: "zhàogu",
    },
  },
  {
    word: {
      chinese: "完成",
      pinyin: "wánchéng",
    },
  },
  {
    word: {
      chinese: "必须",
      pinyin: "bìxū",
    },
  },
  {
    word: {
      chinese: "突然",
      pinyin: "tūrán",
    },
  },
  {
    word: {
      chinese: "不得不",
      pinyin: "bùdébù",
    },
  },
  {
    word: {
      chinese: "推迟",
      pinyin: "tuīchí",
    },
  },
  {
    word: {
      chinese: "取消",
      pinyin: "qǔxiāo",
    },
  },
  {
    word: {
      chinese: "改变",
      pinyin: "gǎibiàn",
    },
  },
  {
    word: {
      chinese: "不好意思",
      pinyin: "bù hǎoyìsi",
    },
  },
  {
    word: {
      chinese: "会议",
      pinyin: "huìyì",
    },
  },
  {
    word: {
      chinese: "计划",
      pinyin: "jìhuà",
    },
  },
  {
    word: {
      chinese: "既然",
      pinyin: "jìrán",
    },
  },
  {
    word: {
      chinese: "赶",
      pinyin: "gǎn",
    },
  },
  "Shocked",
  {
    word: {
      chinese: "连",
      pinyin: "lián",
    },
  },
  {
    word: {
      chinese: "怕",
      pinyin: "pà",
    },
  },
  {
    word: {
      chinese: "相信",
      pinyin: "xiāngxìn",
    },
  },
  {
    word: {
      chinese: "校长",
      pinyin: "xiàozhǎng",
    },
  },
  {
    word: {
      chinese: "经理",
      pinyin: "jīnglǐ",
    },
  },
  {
    word: {
      chinese: "大夫",
      pinyin: "dàifu",
    },
  },
  {
    word: {
      chinese: "难道",
      pinyin: "nándào",
    },
  },
  {
    word: {
      chinese: "节目",
      pinyin: "jiémù",
    },
  },
  {
    word: {
      chinese: "事情",
      pinyin: "shìqing",
    },
  },
  {
    word: {
      chinese: "广告",
      pinyin: "guǎnggào",
    },
  },
  {
    word: {
      chinese: "网站",
      pinyin: "wǎngzhàn",
    },
  },
  {
    word: {
      chinese: "新闻",
      pinyin: "xīnwén",
    },
  },
  {
    word: {
      chinese: "竟然",
      pinyin: "jìngrán",
    },
  },
  {
    word: {
      chinese: "想",
      pinyin: "xiǎng",
    },
  },
  {
    word: {
      chinese: "粗心",
      pinyin: "cūxīn",
    },
  },
  {
    word: {
      chinese: "复杂",
      pinyin: "fùzá",
    },
  },
  {
    word: {
      chinese: "精彩",
      pinyin: "jīngcǎi",
    },
  },
  {
    word: {
      chinese: "无聊",
      pinyin: "wúliáo",
    },
  },
  {
    word: {
      chinese: "友好",
      pinyin: "yǒuhǎo",
    },
  },
  "China 1",
  {
    word: {
      chinese: "关于",
      pinyin: "guānyú",
    },
  },
  {
    word: {
      chinese: "情况",
      pinyin: "qíngkuàng",
    },
  },
  {
    word: {
      chinese: "气候",
      pinyin: "qìhòu",
    },
  },
  {
    word: {
      chinese: "饮食",
      pinyin: "yǐnshí",
    },
  },
  {
    word: {
      chinese: "以",
      pinyin: "yǐ",
    },
  },
  {
    word: {
      chinese: "为",
      pinyin: "wéi",
    },
  },
  {
    word: {
      chinese: "主",
      pinyin: "zhǔ",
    },
  },
  {
    word: {
      chinese: "汽车",
      pinyin: "qìchē",
    },
  },
  {
    word: {
      chinese: "交通",
      pinyin: "jiāotōng",
    },
  },
  {
    word: {
      chinese: "不仅",
      pinyin: "bùjǐn",
    },
  },
  {
    word: {
      chinese: "还",
      pinyin: "hái",
    },
  },
  "China 2",
  {
    word: {
      chinese: "由",
      pinyin: "yóu",
    },
  },
  {
    word: {
      chinese: "区别",
      pinyin: "qūbié",
    },
  },
  {
    word: {
      chinese: "广州",
      pinyin: "Guǎngzhōu",
    },
  },
  {
    word: {
      chinese: "香港",
      pinyin: "Xiānggǎng",
    },
  },
  {
    word: {
      chinese: "倍",
      pinyin: "bèi",
    },
  },
  {
    word: {
      chinese: "一半",
      pinyin: "yībàn",
    },
  },
  {
    word: {
      chinese: "百分之",
      pinyin: "bǎi fēnzhī",
    },
  },
  {
    word: {
      chinese: "人口",
      pinyin: "rénkǒu",
    },
  },
  {
    word: {
      chinese: "面积",
      pinyin: "miànji",
    },
  },
  "Nature",
  {
    word: {
      chinese: "一般",
      pinyin: "yībān",
    },
  },
  {
    word: {
      chinese: "生活",
      pinyin: "shēnghuó",
    },
  },
  {
    word: {
      chinese: "熊猫",
      pinyin: "xióngmāo",
    },
  },
  {
    word: {
      chinese: "森林",
      pinyin: "sēnlín",
    },
  },
  {
    word: {
      chinese: "树",
      pinyin: "shù",
    },
  },
  {
    word: {
      chinese: "海洋",
      pinyin: "hǎiyáng",
    },
  },
  {
    word: {
      chinese: "座",
      pinyin: "zuò",
    },
  },
  {
    word: {
      chinese: "片",
      pinyin: "piàn",
    },
  },
  {
    word: {
      chinese: "草原",
      pinyin: "cǎoyuán",
    },
  },
  {
    word: {
      chinese: "河",
      pinyin: "hé",
    },
  },
  {
    word: {
      chinese: "沙漠",
      pinyin: "shāmò",
    },
  },
  {
    word: {
      chinese: "山",
      pinyin: "shān",
    },
  },
  {
    word: {
      chinese: "只有",
      pinyin: "zhǐyǒu",
    },
  },
  {
    word: {
      chinese: "才",
      pinyin: "cái",
    },
  },
  {
    word: {
      chinese: "阳光",
      pinyin: "yángguāng",
    },
  },
  {
    word: {
      chinese: "空气",
      pinyin: "kōngqì",
    },
  },
  {
    word: {
      chinese: "植物",
      pinyin: "zhíwù",
    },
  },
  {
    word: {
      chinese: "景色",
      pinyin: "jǐngsè",
    },
  },
  "Environment",
  {
    word: {
      chinese: "然而",
      pinyin: "ránér",
    },
  },
  {
    word: {
      chinese: "污染",
      pinyin: "wūrǎn",
    },
  },
  {
    word: {
      chinese: "环境",
      pinyin: "huánjìng",
    },
  },
  {
    word: {
      chinese: "塑料袋",
      pinyin: "sùliàodài",
    },
  },
  {
    word: {
      chinese: "一次性",
      pinyin: "yīcìxìng",
    },
  },
  {
    word: {
      chinese: "保护",
      pinyin: "bǎohù",
    },
  },
  {
    word: {
      chinese: "减少",
      pinyin: "jiǎnshǎo",
    },
  },
];

// const idxs = [];
// const indexes = Final.forEach((e, i) => {
//   if (typeof e === "string") {
//     idxs.push(i);
//   }
// });

// console.log(idxs);

// const makeDir = () => {
//     Final.forEach(() => {
//         if
//     })
// }

// const indexArr = [
//   0, 19, 35, 53, 71, 84, 100, 111, 128, 142, 160, 177, 190, 201, 216, 235, 250,
//   262, 284, 301, 315, 323, 339, 348, 365, 376, 396, 404, 415, 431, 447, 461,
//   487, 505, 519, 538, 555, 570, 588, 601, 612, 628, 640, 662, 680, 702, 719,
//   738, 752, 763, 790, 805, 819, 830, 852, 871, 888, 904, 920, 932, 942, 957,
//   977, 989, 999, 1018,
// ];

// const makeDir = () => {
//   indexArr.forEach((i, e) => {
//     const name = Final[i].replaceAll(" ", "_");
//     console.log(name);
//     const arr = Final.slice(i + 1, indexArr[e + 1]);
//     fs.writeFile(
//       `./${name}.ts`,
//       `export const ${name} = ${JSON.stringify(arr)}`,
//       () => console.log("bad")
//     );
//     // console.log(arr);
//   });
// };

// makeDir();

// import { pinyin } from "../components/wordBank/PinYin";
// import { chinese1 } from "../components/wordBank/Chinese";

// const obj = {
//   word: {
//     chinese: "",
//     pinyin: "",
//   },
// };

// function nthIndex(str, pat, n) {
//   var L = str.length,
//     i = -1;
//   while (n-- && i++ < L) {
//     i = str.indexOf(pat, i);
//     if (i < 0) break;
//   }
//   return i;
// }

// const Foods = chinese1.map((e, i) => {
//   const obj = {
//     word: {
//       chinese: "",
//       pinyin: "",
//     },
//   };
//   if (!e.startsWith("//")) {
//     obj.word.chinese = e as string;
//     obj.word.pinyin = pinyin[i] as string;
//     return obj;
//   } else {
//     const index = nthIndex(e, "/", 3);
//     return e.slice(index + 2);
//   }
// });

// console.log(Foods);

const names = [
  "Dates",
  "Locations",
  "Personal_Information",
  "Time",
  "Hometown",
  "Taste",
  "Restaurants_1",
  "Daily_Schedule",
  "Leisure",
  "Appearance",
  "Clothes",
  "Colors",
  "Shopping",
  "Sports",
  "Spare_Time",
  "Transport",
  "Directions",
  "Rooms",
  "Weather",
  "Phone_Calls",
  "Communications",
  "Sweets",
  "Pets",
  "Suggestions",
  "Health",
  "Ordering_Food",
  "Restaurants",
  "Helping_Out",
  "Bargaining",
  "Learning_Chinese_2",
  "School",
  "Dating",
  "Feelings",
  "Family_2",
  "Career",
  "Traveling_1",
  "Going_Abroad",
  "Catching_a_Flight",
  "Traveling_2",
  "Renting",
  "Daily_Life",
  "Habits",
  "Mistakes",
  "Interviews",
  "Work",
  "Bad_Luck",
  "Greetings",
  "Online_Shopping",
  "Office_Work",
  "Sports_Competitions",
  "Gossip",
  "Hiking",
  "Comparing",
  "Arguments",
  "Personality",
  "Praise",
  "Weight_Loss",
  "Housework",
  "Movies",
  "Apologizing",
  "Shocked",
  "China_1",
  "China_2",
  "Nature",
  "Environment",
];

// const imports = [];
// names.forEach((e) => {
//   const string = `import {${e}} from '../components/wordBank/${e}.ts'`;
//   imports.push(string);
// });

// console.log(imports);
