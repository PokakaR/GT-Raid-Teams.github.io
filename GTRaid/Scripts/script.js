class Hero {
  constructor(zh_neme,en_name, attribute, rarity, ChainSkill1, ChainSkill2, sort1, sort2) {
    this.zh_name = zh_neme;
    this.en_name = en_name;
    this.attribute = attribute;
    this.imgPath = "image\\character_icon\\" + attribute + "\\" + en_name + ".png";
    this.rarity = rarity;
    this.chain1_imgPath = "image\\abnormal\\" + ChainSkill1 + ".png";
    this.chain2_imgPath = "image\\abnormal\\" + ChainSkill2 + ".png";
    this.sort1 = sort1;
    this.sort2 = sort2;
  }
}

var hero1 = new Hero("普莉菲斯", "Plitvice", "fire", 3, "injured", "downed", "Two-Handed", "");
var hero2 = new Hero("普莉菲斯", "Plitvice", "fire", 3, "downed", "airborne", "One-Handed", "");
var hero3 = new Hero("拉碧絲", "Lapice", "light", 3, "downed", "airborne", "One-Handed", "Shield");
var hero4 = new Hero("拉碧絲", "Lapice", "light", 3, "injured", "downed", "Two-Handed", "");
var hero5 = new Hero("瑪麗娜", "Marina", "water", 3, "all", "injured", "One-Handed", "");
var hero6 = new Hero("阿拉貝爾", "Arabelle", "dark", 3, "injured", "downed", "Rifle", "");
var hero7 = new Hero("偶像伊娃", "IdolCaptainEva", "normal", 3, "all", "downed", "Staff", "");
var hero8 = new Hero("芭莉", "Bari", "earth", 3, "injured", "downed", "Basket", "");
var hero9 = new Hero("瑞皮娜", "Lupina", "dark", 3, "injured", "airborne", "Staff", "");
var hero10 = new Hero("蘭兒(1專)", "Lahn", "normal", 3, "airborne", "injured", "Gauntlet", "");
var hero11 = new Hero("蘭兒(2專)", "Lahn", "normal", 3, "airborne", "downed", "Basket", "");
var hero12 = new Hero("尤金", "Eugene", "light", 3, "injured", "downed", "Two-Handed", "");
var hero13 = new Hero("蒂尼亞", "Tinia", "earth", 3, "injured", "airborne", "Bow", "");
var hero14 = new Hero("比什巴赫(1專)", "Vishuvac", "fire", 3, "all", "injured", "Claw", "");
var hero15 = new Hero("比什巴赫(2專)", "Vishuvac", "fire", 3, "all", "airborne", "Gauntlet", "");
var hero16 = new Hero("奈里", "Nari", "normal", 3, "downed", "airborne", "Basket", "");
var hero17 = new Hero("比安卡", "Bianca", "water", 3, "airborne", "downed", "Two-Handed", "");
var hero18 = new Hero("奧格瑪(1專)", "Oghma", "dark", 3, "downed", "injured", "One-Handed", "Shield");
var hero19 = new Hero("奧格瑪(2專)", "Oghma", "dark", 3, "airborne", "injured", "Rifle", "Shield");
var hero20 = new Hero("阿列夫", "Alef", "earth", 3, "airborne", "downed", "Gauntlet", "");
var hero21 = new Hero("米雅", "Miya", "fire", 3, "all", "downed", "Basket", "");
var hero22 = new Hero("未來公主", "FuturePrincess", "light", 3, "injured", "downed", "Staff", "");
var hero23 = new Hero("加拉姆", "Garam", "water", 3, "downed", "airborne", "Bow", "");
var hero24 = new Hero("貝斯", "Beth", "dark", 3, "downed", "injured", "Two-Handed", "");
var hero25 = new Hero("魯(1專)", "Rue", "earth", 3, "downed", "injured", "Rifle", "");
var hero26 = new Hero("魯(2專)", "Rue", "earth", 3, "all", "downed", "Two-Handed", "");
var hero27 = new Hero("加百列", "Gabriel", "light", 3, "all", "injured", "Bow", "");
var hero28 = new Hero("琳恩", "Lynn", "fire", 3, "downed", "injured", "One-Handed", "");
var hero29 = new Hero("未來騎士(1專)", "FutureKnight", "normal", 3, "downed", "airborne", "Rifle", "");
var hero30 = new Hero("未來騎士(2專)", "FutureKnight", "normal", 3, "airborne", "injured", "Two-Handed", "");
var hero31 = new Hero("維洛妮卡", "Veronica", "water", 3, "all", "downed", "Staff", "");
var hero32 = new Hero("諾克西亞", "Noxia", "dark", 3, "all", "airborne", "Basket", "");
var hero33 = new Hero("梅麗爾", "Mayreel", "earth", 3, "downed", "injured", "Claw", "");
var hero34 = new Hero("MK.99", "MK99", "light", 3, "downed", "injured", "Rifle", "");
var hero35 = new Hero("莉莉絲", "Lilith", "dark", 3, "injured", "downed", "Claw", "");
var hero36 = new Hero("露西", "Lucy", "fire", 3, "airborne", "downed", "Staff", "");
var hero37 = new Hero("海灘蘇熙", "BeachSohee", "normal", 3, "injured", "airborne", "Two-Handed", "");
var hero38 = new Hero("海灘優姬", "BeachYuze", "water", 3, "downed", "airborne", "Two-Handed", "");
var hero39 = new Hero("艾莉諾", "Eleanor", "light", 3, "all", "downed", "Basket", "");
var hero40 = new Hero("辛緹拉", "Scintilla", "fire", 3, "downed", "injured", "Gauntlet", "");
var hero41 = new Hero("艾麗娜", "Erina", "normal", 3, "downed", "injured", "One-Handed", "Shield");
var hero42 = new Hero("卡瑪爾", "Kamael", "earth", 3, "airborne", "injured", "Staff", "");
var hero43 = new Hero("MK.2", "MK2", "dark", 3, "airborne", "injured", "Rifle", "");
var hero44 = new Hero("奧爾卡", "Orca", "water", 3, "airborne", "downed", "Rifle", "");
var hero45 = new Hero("卡娜", "Kanna", "normal", 3, "all", "downed", "Staff", "");
var hero46 = new Hero("漢娜", "Hana", "water", 3, "injured", "downed", "Staff", "");
var hero47 = new Hero("卡蘿", "Carol", "light", 3, "injured", "downed", "One-Handed", "");
var hero48 = new Hero("克拉拉", "Clara", "fire", 3, "airborne", "injured", "Bow", "");
var hero49 = new Hero("帕爾瓦蒂", "Parvati", "earth", 3, "downed", "injured", "Gauntlet", "");
var hero50 = new Hero("普利希拉", "Priscilla", "light", 3, "injured", "downed", "Basket", "");
var hero51 = new Hero("克勞德", "Claude", "dark", 3, "downed", "airborne", "Gauntlet", "");
var hero52 = new Hero("亞拉", "Ara", "water", 3, "downed", "injured", "Basket", "");
var hero53 = new Hero("蕾伊", "Rey", "fire", 3, "injured", "downed", "One-Handed", "");
var hero54 = new Hero("AA72", "AA72", "water", 3, "airborne", "downed", "Rifle", "");
var hero55 = new Hero("夏日蘿蘭茵", "SummerLoraine", "normal", 3, "downed", "injured", "Basket", "");
var hero56 = new Hero("瘋狂熊貓三重奏", "MadPandaTrio", "earth", 3, "downed", "injured", "Gauntlet", "");
var hero57 = new Hero("克羅姆小姐", "MissChrome", "normal", 3, "injured", "downed", "Rifle", "");
var hero58 = new Hero("瓦倫西亞", "Valencia", "light", 3, "downed", "injured", "One-Handed", "");
var hero59 = new Hero("克羅賽爾", "Crosselle", "dark", 3, "downed", "airborne", "Gauntlet", "");
var hero60 = new Hero("安德拉斯", "Andras", "water", 3, "all", "downed", "Staff", "");
var hero61 = new Hero("菫", "Sumire", "dark", 3, "downed", "injured", "Claw", "");
var hero62 = new Hero("派蒙", "Pymon", "fire", 3, "downed", "injured", "Gauntlet", "");
var hero63 = new Hero("蘿賽塔", "Rosetta", "earth", 3, "injured", "airborne", "Rifle", "");
var hero64 = new Hero("白色小孩", "WhiteSnow", "water", 3, "airborne", "injured", "Gauntlet", "");
var hero65 = new Hero("第1軍團團長", "CorpsCommander", "dark", 3, "injured", "airborne", "Staff", "");
var hero66 = new Hero("卡登", "Kai", "light", 3, "downed", "injured", "One-Handed", "");
var hero67 = new Hero("千慮", "ChunRyeo", "light", 3, "downed", "airborne", "Basket", "");
var hero68 = new Hero("亞美莉絲", "Ameris", "earth", 3, "airborne", "downed", "Claw", "");
var hero69 = new Hero("矽雅", "Sia", "water", 3, "all", "downed", "Basket", "");
var hero70 = new Hero("泳裝愛彌", "BeachAmy", "fire", 3, "injured", "airborne", "One-Handed", "");
var hero71 = new Hero("銀荷", "Eunha", "normal", 3, "downed", "airborne", "Basket", "");
var hero72 = new Hero("泳裝夏碧拉", "BeachShapira", "light", 3, "injured", "downed", "Two-Handed", "");
var hero73 = new Hero("莉娜", "Lina", "fire", 3, "injured", "airborne", "Gauntlet", "");
var hero74 = new Hero("高里", "Gourry", "light", 3, "downed", "airborne", "Two-Handed", "");
var hero75 = new Hero("傑洛士", "Xelloss", "dark", 3, "all", "downed", "Staff", "");
var hero76 = new Hero("達伊", "Dai", "normal", 3, "downed", "airborne", "One-Handed", "");
var hero77 = new Hero("瑪姆", "Maam", "earth", 3, "injured", "airborne", "Gauntlet", "");
var hero78 = new Hero("波普", "Popp", "fire", 3, "airborne", "downed", "Staff", "");
var hero79 = new Hero("女騎士(1專)", "FemaleKnight", "normal", 2, "airborne", "downed", "One-Handed", "");
var hero80 = new Hero("女騎士(2專)", "FemaleKnight", "normal", 2, "airborne", "downed", "Bow", "");
var hero81 = new Hero("伊娃", "Eva", "light", 2, "airborne", "downed", "Staff", "");
var hero82 = new Hero("艾薇拉", "Elvira", "fire", 2, "airborne", "downed", "Rifle", "");
var hero83 = new Hero("艾薇拉(晉升)", "Elvira_Ascended", "fire", 3, "airborne", "downed", "Rifle", "");
var hero84 = new Hero("白獸", "WhiteBeast", "water", 2, "injured", "airborne", "Claw", "");
var hero85 = new Hero("卡麗娜", "Karina", "dark", 2, "downed", "injured", "Staff", "");
var hero86 = new Hero("卡麗娜(晉升)", "Karina_Ascended", "dark", 3, "all", "injured", "Staff", "");
var hero87 = new Hero("蘿蘭茵", "Loraine", "normal", 2, "all", "injured", "Basket", "");
var hero88 = new Hero("拉葳", "Lavi", "fire", 2, "downed", "airborne", "Gauntlet", "");
var hero89 = new Hero("法葳", "Favi", "water", 2, "all", "injured", "Basket", "");
var hero90 = new Hero("奧芭", "Aoba", "earth", 2, "all", "downed", "Bow", "");
var hero91 = new Hero("葛蕾茉莉", "Gremory", "dark", 2, "all", "airborne", "Basket", "");
var hero92 = new Hero("瑞秋", "Rachel", "water", 2, "injured", "downed", "Rifle", "");
var hero93 = new Hero("赫卡蒂", "Hekate", "earth", 2, "downed", "injured", "Rifle", "");
var hero94 = new Hero("可可", "Coco", "water", 2, "injured", "airborne", "Staff", "");
var hero95 = new Hero("瑪莉安", "Marianne", "earth", 2, "downed", "airborne", "Rifle", "");
var hero96 = new Hero("蘇熙", "Sohee", "light", 2, "downed", "airborne", "Rifle", "");
var hero97 = new Hero("梅兒", "Mei", "light", 2, "downed", "airborne", "Gauntlet", "");
var hero98 = new Hero("梅兒(晉升)", "Mei_Ascended", "light", 3, "downed", "airborne", "Gauntlet", "");
var hero99 = new Hero("飛兒", "Fei", "light", 2, "downed", "airborne", "Gauntlet", "");
var hero100 = new Hero("飛兒(晉升)", "Fei_Ascended", "light", 3, "downed", "airborne", "Gauntlet", "");
var hero101 = new Hero("馬文", "Marvin", "earth", 2, "airborne", "downed", "Gauntlet", "");
var hero102 = new Hero("克雷格", "Craig", "earth", 2, "downed", "airborne", "One-Handed", "Shield");
var hero103 = new Hero("克雷格(晉升)", "Craig_Ascended", "earth", 3, "downed", "airborne", "One-Handed", "Shield");
var hero104 = new Hero("赤雪", "Akayuki", "fire", 2, "injured", "downed", "One-Handed", "");
var hero105 = new Hero("蘭芳", "Ranpang", "normal", 2, "injured", "airborne", "Gauntlet", "");
var hero106 = new Hero("優姬", "Yuze", "dark", 2, "airborne", "injured", "Two-Handed", "");
var hero107 = new Hero("艾伊莎", "Aisha", "light", 2, "all", "downed", "One-Handed", "Shield");
var hero108 = new Hero("夏碧拉", "Shapira", "dark", 2, "airborne", "downed", "Two-Handed", "");
var hero109 = new Hero("多爾夫", "Dolf", "fire", 2, "downed", "injured", "Staff", "");
var hero110 = new Hero("愛彌", "Amy", "normal", 2, "downed", "injured", "Two-Handed", "");
var hero111 = new Hero("基魯加斯", "Girgas", "fire", 2, "injured", "airborne", "Staff", "");
var hero112 = new Hero("凱特琳", "Catherine", "water", 2, "airborne", "injured", "Bow", "");
var hero113 = new Hero("麗", "Rie", "normal", 2, "airborne", "downed", "One-Handed", "");
var hero114 = new Hero("涅娃", "Neva", "light", 2, "downed", "injured", "Two-Handed", "");

var heros = Array.from({ length: 114 }, function (_, i) {
  var num = i + 1;
  var name = "hero" + num;
  return eval(name);
});

for (let i = 0; i < heros.length; i++) {
  const newDiv1 = $('<div>', { class: "hero-icon-Container" });
  //const newDiv2 = $('<div>', { id: "icon" + i, class: "hero-icon", style: "display:inline-block" });
  const newDiv2 = $('<div>', { class: "hero-icon", style: "display:inline-block" });
  const newDiv3 = $('<div>', { class: "hero-img", style: "display:inline-block" });
  const newHeroImg = $('<img>', { class:"absolute", src: heros[i].imgPath, alt: heros[i].en_name });
  const newHeroName = $('<div>', { class: "image-name"});
  const newGrid = $('<div>', { class: "hero-icon-grid" });
  const newAbnormalImg1 = $('<img>', { class: "grid-abnormal-state1", src: heros[i].chain1_imgPath });
  const newAbnormalImg2 = $('<img>', { class: "grid-abnormal-state2", src: heros[i].chain2_imgPath });

  newGrid.append(newAbnormalImg1);
  newGrid.append(newAbnormalImg2);
  //newHeroImg.addClass('radiu-7');
  newDiv3.append(newHeroImg);
  newHeroName.addClass('absolute');
  newHeroName.text(heros[i].zh_name);
  newDiv3.append(newHeroName);
  newDiv2.append(newGrid);
  newDiv2.append(newDiv3);
  newDiv1.append(newDiv2);
  newDiv1.addClass(heros[i].en_name);
  newDiv1.addClass(heros[i].sort1);
  newDiv1.addClass('radiu-4');
  newDiv1.addClass('relative');


  if (heros[i].attribute == "normal") {
    $('#normal-hero').append(newDiv1);
    //$('#icon' + i).append(newGrid);
    //$('#icon' + i).addClass(heros[i].sort1);
    //$('#icon' + i).addClass(heros[i].sort2);
  }

  if (heros[i].attribute == "water") {
    $('#water-hero').append(newDiv1);
    //$('#icon' + i).append(newGrid);
    //$('#icon' + i).addClass(heros[i].sort1);
    //$('#icon' + i).addClass(heros[i].sort2);
  }

  if (heros[i].attribute == "fire") {
    $('#fire-hero').append(newDiv1);
    //$('#icon' + i).append(newGrid);
    //$('#icon' + i).addClass(heros[i].sort1);
    //$('#icon' + i).addClass(heros[i].sort2);
  }

  if (heros[i].attribute == "earth") {
    $('#earth-hero').append(newDiv1);
    //$('#icon' + i).append(newGrid);
    //$('#icon' + i).addClass(heros[i].sort1);
    //$('#icon' + i).addClass(heros[i].sort2);
  }

  if (heros[i].attribute == "light") {
    $('#light-hero').append(newDiv1);
    //$('#icon' + i).append(newGrid);
    //$('#icon' + i).addClass(heros[i].sort1);
    //$('#icon' + i).addClass(heros[i].sort2);
  }

  if (heros[i].attribute == "dark") {
    $('#dark-hero').append(newDiv1);
    //$('#icon' + i).append(newGrid);
    //$('#icon' + i).addClass(heros[i].sort1);
    //$('#icon' + i).addClass(heros[i].sort2);
  }
}

class Weapon {
  //名字、狀態、屬性、稀有度、專武、英雄名字、分類
  constructor(zh_name, en_name, state, attribute, rarity, ex, heroName, sort) {
    this.zh_name = zh_name;
    this.en_name = en_name;
    this.state = "image\\abnormal\\" + state + ".png";
    this.ex = ex;
    this.heroName = heroName;
    this.attribute = attribute;
    this.imgPath = "image\\Weapons\\" + attribute + "\\" + en_name + ".png";
    this.sort = sort;
    this.rarity = rarity;
  }
}

var weapon1 = new Weapon("天真","Innocent","Downed","light","Epic","Express","Lapice","One-Handed");
var weapon2 = new Weapon("阿爾馬達","Armada","Downed","water","Epic","Express","Marina","One-Handed");
var weapon3 = new Weapon("方陣剎那","Eckesachs","Downed","dark","Epic","Express","None","One-Handed");
var weapon4 = new Weapon("紅蓮","Red Lotus","Downed","fire","Epic","Express","Lynn","One-Handed");
var weapon5 = new Weapon("巴爾蒙克","Balmung","Downed","normal","Epic","Express","Erina","One-Handed");
var weapon6 = new Weapon("小星星","Little Star","injured","light","Epic","Express","Carol","One-Handed");
var weapon7 = new Weapon("天衣無縫","Heavenly Perfection","injured","fire","Epic","Express","Rey","One-Handed");
var weapon8 = new Weapon("阿格斯","Arges","Downed","light","Epic","Express","Valencia","One-Handed");
var weapon9 = new Weapon("光環","Halo","Downed","fire","Epic","Express","Plitvice","One-Handed");
var weapon10 = new Weapon("迪朗達爾","Epic One Handed Sword","Downed","light","Epic","Express","Kai","One-Handed");
var weapon11 = new Weapon("羅摩之斧","Parashu","injured","fire","Epic","Express","BeachAmy","One-Handed");
var weapon12 = new Weapon("達伊之劍","Sword of Dai","Downed","normal","Epic","Express","Dai","One-Handed");
var weapon13 = new Weapon("村雨","Murasame","injured","fire","Legend","Express","Akayuki","One-Handed");
var weapon14 = new Weapon("利貝拉","Libera","airborne","normal","Legend","Express","None","One-Handed");
var weapon15 = new Weapon("沉默","Silence","Downed","earth","Legend","Express","Craig","One-Handed");
var weapon16 = new Weapon("真理","Veritas","airborne","light","Legend","Express","Aisha","One-Handed");
var weapon17 = new Weapon("引人注目","Prominence","injured","fire","Epic","Express","Plitvice","Two-Handed");
var weapon18 = new Weapon("勇敢的心","Brave Heart","airborne","light","Epic","Express","Eugene","Two-Handed");
var weapon19 = new Weapon("阿斯塔蒂","Astarte","airborne","water","Epic","Express","Bianca","Two-Handed");
var weapon20 = new Weapon("獵食者","Predator","Downed","dark","Epic","Express","Beth","Two-Handed");
var weapon21 = new Weapon("海之女神","Nereid","injured","normal","Epic","Express","BeachSohee","Two-Handed");
var weapon22 = new Weapon("海洋守護者","Ocean Keeper","Downed","water","Epic","Express","BeachYuze","Two-Handed");
var weapon23 = new Weapon("原子破獲者","Atomic Destroyer","airborne","normal","Epic","Express","None","Two-Handed");
var weapon24 = new Weapon("光芒四射","Radiant","injured","light","Epic","Express","Lapice","Two-Handed");
var weapon25 = new Weapon("夢魘","Nightmare","injured","earth","Epic","Express","None","Two-Handed");
var weapon26 = new Weapon("皇家鏟子","Loyal Shovel","injured","light","Epic","Express","BeachShapira","Two-Handed");
var weapon27 = new Weapon("光之劍","Sword of Light","Downed","light","Epic","Express","Gourry","Two-Handed");
var weapon28 = new Weapon("雙子座","Geminus","Downed","normal","Legend","Express","Amy","Two-Handed");
var weapon29 = new Weapon("塔爾塔羅斯","Tartaros","airborne","dark","Legend","Express","Yuze","Two-Handed");
var weapon30 = new Weapon("法夫納","Fafnir","airborne","dark","Legend","Express","Shapira","Two-Handed");
var weapon31 = new Weapon("鹿角","Deer Horn","airborne","earth","Legend","Normal","None","Two-Handed");
var weapon32 = new Weapon("大地之歌雙手劍","Earth Song Two-Handed Sword","airborne","earth","Unique","Normal","None","Two-Handed");
var weapon33 = new Weapon("集體滅絕","Genocide","injured","dark","Epic","Express","Arabelle","Rifle");
var weapon34 = new Weapon("終結者","Terminator","injured","earth","Epic","Express","None","Rifle");
var weapon35 = new Weapon("宇宙毀滅者","Cosmic Destroyer","Downed","normal","Epic","Express","None","Rifle");
var weapon36 = new Weapon("奧米加衝鋒槍","Omega Blaster","Downed","light","Epic","Express","MK99","Rifle");
var weapon37 = new Weapon("反叛","Rebellion","airborne","dark","Epic","Express","MK2","Rifle");
var weapon38 = new Weapon("復仇者","Nnemesis","airborne","water","Epic","Express","Orca","Rifle");
var weapon39 = new Weapon("藍色尖刺","Blue Spear","airborne","water","Epic","Express","AA72","Rifle");
var weapon40 = new Weapon("方陣剎那Mode.R","Eckesachs Mode.R","airborne","dark","Epic","Express","None","Rifle");
var weapon41 = new Weapon("黑曼巴蛇","Black Mamba","injured","normal","Epic","Express","MissChrome","Rifle");
var weapon42 = new Weapon("拉特爾","Ratel","injured","earth","Epic","Express","Rosetta","Rifle");
var weapon43 = new Weapon("麻煩精","Trouble Maker","airborne","fire","Legend","Express","Elvira","Rifle");
var weapon44 = new Weapon("無情","Merciless","Downed","earth","Legend","Express","Marianne","Rifle");
var weapon45 = new Weapon("藍玫瑰","Blue Rose","injured","water","Legend","Express","Rachel","Rifle");
var weapon46 = new Weapon("瑪奇頓破壞者","Magiton Buster","Downed","light","Legend","Express","Sohee","Rifle");
var weapon47 = new Weapon("薩倫加弓","Sarnga","injured","earth","Epic","Express","Tinia","Bow");
var weapon48 = new Weapon("千雷","Thousand Thunder","Downed","water","Epic","Express","Garam","Bow");
var weapon49 = new Weapon("聖母讚","Magnificat","Downed","light","Epic","Express","Gabriel","Bow");
var weapon50 = new Weapon("派蒙的碎片III","Paimon's Fragment III","airborne","fire","Epic","Express","Pymon","Bow");
var weapon51 = new Weapon("掠奪者","Marauder","airborne","water","Legend","Express","Catherine","Bow");
var weapon52 = new Weapon("奧伯隆","Oberon","airborne","earth","Legend","Express","Aoba","Bow");
var weapon53 = new Weapon("利貝拉Type.B","Libera Type.B","airborne","normal","Legend","Express","None","Bow");
var weapon54 = new Weapon("黃龍弓","Yellow Dragon's Bow","injured","light","Epic","Normal","None","Bow");
var weapon55 = new Weapon("恐懼之翼","Wing of Terror","injured","dark","Legend","Normal","None","Bow");
var weapon56 = new Weapon("梅麗爾","Mayreel","injured","earth","Epic","Express","Bari","Basket");
var weapon57 = new Weapon("至聖寶珠","Sage Bead","Downed","normal","Epic","Express","Nari","Basket");
var weapon58 = new Weapon("香格里拉","Shangri La","airborne","fire","Epic","Express","Miya","Basket");
var weapon59 = new Weapon("紫魄","Furfur","Downed","dark","Epic","Express","Noxia","Basket");
var weapon60 = new Weapon("讚美詩","Benedictus","injured","light","Epic","Express","Eleanor","Basket");
var weapon61 = new Weapon("蝕","Eclipse","injured","light","Epic","Express","Priscilla","Basket");
var weapon62 = new Weapon("萬波息筆","Bringer of Tranquility","Downed","water","Epic","Express","Ara","Basket");
var weapon63 = new Weapon("海洋呼喚","Ocean Call","Downed","normal","Epic","Express","SummerLoraine","Basket");
var weapon64 = new Weapon("鏡花水月","Elusive Reflection","airborne","normal","Epic","Express","None","Basket");
var weapon65 = new Weapon("玄山拳祕笈","Secret Book of the Shen Mountain Fist","Downed","light","Epic","Express","ChunRyeo","Basket");
var weapon66 = new Weapon("海洋之淚","Oceans Tear","injured","water","Epic","Express","Sia","Basket");
var weapon67 = new Weapon("千變萬化","Infinite Change","Downed","normal","Epic","Express","Eunha","Basket");
var weapon68 = new Weapon("艾瑪","Emma","Downed","normal","Legend","Express","Loraine","Basket");
var weapon69 = new Weapon("冰霜傑克","Jack Frost","Downed","water","Legend","Express","Favi","Basket");
var weapon70 = new Weapon("好奇解答者","Curiosity Solver","injured","dark","Legend","Express","Gremory","Basket");
var weapon71 = new Weapon("閃光寶石籃","Shining Jewel Basket","Downed","light","Legend","Normal","None","Basket");
var weapon72 = new Weapon("鯊魚籃","Shark Basket","airborne","water","Unique","Normal","None","Basket");
var weapon73 = new Weapon("天使之聲","Angel Voice","airborne","normal","Epic","Express","IdolCaptainEva","Staff");
var weapon74 = new Weapon("亞馬洛克","Amarok","injured","dark","Epic","Express","Lupina","Staff");
var weapon75 = new Weapon("解放者","Liberator","injured","light","Epic","Express","FuturePrincess","Staff");
var weapon76 = new Weapon("彌賽亞","Messiah","airborne","water","Epic","Express","Veronica","Staff");
var weapon77 = new Weapon("幻想曲","Fantasia","airborne","fire","Epic","Express","Lucy","Staff");
var weapon78 = new Weapon("艾奎諾克斯","Equinox","airborne","earth","Epic","Express","Kamael","Staff");
var weapon79 = new Weapon("愛的教訓","Mind Snap","injured","normal","Epic","Express","Kanna","Staff");
var weapon80 = new Weapon("斷開鎖練","Unchained","injured","water","Epic","Express","Hana","Staff");
var weapon81 = new Weapon("獵頭者","Head Hunter","airborne","water","Epic","Express","Andras","Staff");
var weapon82 = new Weapon("攻無不克","Fail-not","injured","dark","Epic","Express","CorpsCommander","Staff");
var weapon83 = new Weapon("傑洛士的權杖","Xellos' Staff","airborne","dark","Epic","Express","Xelloss","Staff");
var weapon84 = new Weapon("黑魔杖","Black Rod","airborne","fire","Epic","Express","Popp","Staff");
var weapon85 = new Weapon("女巫之心","Witch Heart","injured","water","Legend","Express","Coco","Staff");
var weapon86 = new Weapon("新月","Crescent Moon","Downed","dark","Legend","Express","Karina","Staff");
var weapon87 = new Weapon("正義","Justice","airborne","light","Legend","Express","Eva","Staff");
var weapon88 = new Weapon("太陽神","Helios","Downed","fire","Legend","Express","Dolf","Staff");
var weapon89 = new Weapon("龍之怒","Wrath of Dragon","injured","fire","Legend","Express","Girgas","Staff");
var weapon90 = new Weapon("黃戰士的奧秘權杖","Yellow's Mysterious Staff","injured","light","Epic","Normal","None","Staff");
var weapon91 = new Weapon("光之權威權杖","Authority of Light Staff","injured","light","Epic","Normal","None","Staff");
var weapon92 = new Weapon("青翠寶石權杖","Jewel of Verdure Staff","injured","earth","Legend","Normal","None","Staff");
var weapon93 = new Weapon("收割權杖","Harvest Staff","Downed","earth","Unique","Normal","None","Staff");
var weapon94 = new Weapon("森林看手權杖","Forest Keeper Staff","airborne","earth","Unique","Normal","None","Staff");
var weapon95 = new Weapon("純潔的心","Pure Mind","airborne","normal","Epic","Express","None","Gauntlet");
var weapon96 = new Weapon("歐魯斯","Ouros","airborne","earth","Epic","Express","Alef","Gauntlet");
var weapon97 = new Weapon("伊弗利特","Ifrit","Downed","fire","Epic","Express","Scintilla","Gauntlet");
var weapon98 = new Weapon("辦公用品","Office Supply","Downed","earth","Epic","Express","Parvati","Gauntlet");
var weapon99 = new Weapon("暮光","Twilight","Downed","dark","Epic","Express","Claude","Gauntlet");
var weapon100 = new Weapon("火山核心","Volcanic Core","injured","fire","Epic","Express","None","Gauntlet");
var weapon101 = new Weapon("威望","Prestige","Downed","earth","Epic","Express","MadPandaTrio","Gauntlet");
var weapon102 = new Weapon("存取遭拒","Permission Denied","Downed","dark","Epic","Express","Crosselle","Gauntlet");
var weapon103 = new Weapon("行星破獲者","Planet Buster","Downed","fire","Epic","Express","Pymon","Gauntlet");
var weapon104 = new Weapon("造雪機","Snow Maker","airborne","water","Epic","Express","WhiteSnow","Gauntlet");
var weapon105 = new Weapon("魔血符","Demon's Blood Talisman","injured","fire","Epic","Express","Lina","Gauntlet");
var weapon106 = new Weapon("魔甲拳","Dark Armour Fist","injured","earth","Epic","Express","Maam","Gauntlet");
var weapon107 = new Weapon("法爾肯","Vulkan","airborne","earth","Legend","Express","Marvin","Gauntlet");
var weapon108 = new Weapon("鬥士的自尊","Pride of Fighter","Downed","light","Legend","Express","Mei","Gauntlet");
var weapon109 = new Weapon("粉碎者","Pulverizer","Downed","fire","Legend","Express","Lavi","Gauntlet");
var weapon110 = new Weapon("火山號角","Volcanic Horn","airborne","fire","Epic","Express","None","Claw");
var weapon111 = new Weapon("索拉里斯","Solaris","Downed","earth","Epic","Express","Mayreel","Claw");
var weapon112 = new Weapon("女王的優雅","Queen's Grace","injured","dark","Epic","Express","Lilith","Claw");
var weapon113 = new Weapon("影丸","Kagemaru","Downed","dark","Epic","Express","Sumire","Claw");
var weapon114 = new Weapon("龍齒","Dragon Fang","airborne","earth","Epic","Express","Ameris","Claw");
var weapon115 = new Weapon("堅決的心","Firm Determination","injured","normal","Legend","Express","Ranpang","Claw");
var weapon116 = new Weapon("芬里爾","Fenrir","injured","water","Legend","Express","WhiteBeast","Claw");


var weapons = Array.from({ length: 115 }, function (_, i) {
  var num = i + 1;
  var name = "weapon" + num;
  return eval(name);
});

for (let i = 0; i < weapons.length; i++) {
  const newDiv1 = $('<div>', { class: "EQ-icon-container" });
  const newDiv2 = $('<div>', { class: "EQ-icon", style: "display:inline-block" });
  const newWeaponImg = $('<img>', { class: "EQ-icon-img absolute", src: weapons[i].imgPath, alt: weapons[i].en_name });
  const newWeaponName = $('<div>', { class: "image-name absolute" });
  
  newWeaponImg.addClass('absolute');
  newWeaponName.addClass('absolute');
  newWeaponName.text(weapons[i].zh_name);
  newDiv2.addClass(weapons[i].sort);

  newDiv2.append(newWeaponImg);
  newDiv2.append(newWeaponName);
  newDiv1.append(newDiv2);
  newDiv1.addClass('radiu-4');

  if (weapons[i].ex === "Express") {
    $('.ex-Weapon-container').append(newDiv1);
  } else {
    $('.base-Weapon-container').append(newDiv1);
  }
}
//遺物
class Relic {
  //名字、狀態、屬性、稀有度、專武、英雄名字、分類
  constructor(name) {
    this.name = name;
    this.imgPath = "image\\relic\\" + name + ".png";
  }
}
var relic1 = new Relic("glass");
var relic2 = new Relic("book");
var relic3 = new Relic("bell");
var relic4 = new Relic("candelabrum");

var relices = Array.from({ length: 4 }, function (_, i) {
  var num = i + 1;
  var name = "relic" + num;
  return eval(name);
});
for (let i = 0; i < relices.length; i++) {
  const newDiv1 = $('<div>', { class: "relic-icon-Container" });
  const newDiv2 = $('<div>', { id: "relic" + i, class: "relic-icon" });
  const newDiv3 = $('<div>', { class: "relic-img" });

  const newRelicImg = $('<img>', { src: relices[i].imgPath, alt: relices[i].name });

  newDiv3.append(newRelicImg);
  newDiv2.append(newDiv3);
  newDiv1.append(newDiv2);
  newDiv1.addClass('radiu-4');

  $('.Relic-list').append(newDiv1);
}

//BOSS
class Boss {
  constructor(en_name, zh_name) {
    this.en_name = en_name;
    this.zh_name = zh_name;
    this.imgPath = "image\\BOSS\\" + en_name + ".png";
  }
}
//宣告BOSS
var boss1 = new Boss("Ancient", "遠古惡魔");
var boss2 = new Boss("Bullworm", "沙漠牛蟲");
var boss3 = new Boss("Cyborg Erina", "阿嬤");
var boss4 = new Boss("Elphaba", "校長");
var boss5 = new Boss("Empire Knight", "帝國騎士");
var boss6 = new Boss("Fairy", "妖精");
var boss7 = new Boss("Garam", "九尾狐");
var boss8 = new Boss("Gast", "雪人將軍");
var boss9 = new Boss("Goblin Chief", "哥布林族長");
var boss10 = new Boss("Harvester", "收割者");
var boss11 = new Boss("Invader Commander", "司令官");
var boss12 = new Boss("Invader Director", "侵略者");
var boss13 = new Boss("Lava Slime", "史萊姆");
var boss14 = new Boss("Mad Panda", "熊貓");
var boss15 = new Boss("Marina", "海軍");
var boss16 = new Boss("Minister Duncan", "鄧肯");
var boss17 = new Boss("Minotaur", "牛頭人");
var boss18 = new Boss("Sandmonster", "沙沙");
var boss19 = new Boss("Shadow Beast", "闇影獸");
var boss20 = new Boss("Viper Clan Leader", "老頭");



//將BOSS變數放進陣列中
var bosses = Array.from({ length: 20 }, function (_, i) {
  var num = i + 1;
  var name = "boss" + num;
  return eval(name);
});

for (let i = 0; i < bosses.length; i++) {
  const newDiv1 = $('<div>', { class: "BOSS-icon-Container" });
  const newDiv2 = $('<div>', { class: "BOSS-icon" });
  const newDiv3 = $('<div>', { class: "BOSS-img" });
  const newRelicImg = $('<img>', { src: bosses[i].imgPath, alt: bosses[i].zh_name });

  newDiv3.append(newRelicImg);
  newDiv2.append(newDiv3);
  newDiv1.append(newDiv2);
  newDiv1.addClass('radiu-4');
  newDiv1.addClass('relative');

  $('.BOSS-list').append(newDiv1);
}

//屬性
class Attribute {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.imgPath = "image\\Attribute\\" + name + ".png";
  }
}
//宣告屬性
var attribute1 = new Attribute("ic_attribute_dark", "bg-color-dark");
var attribute2 = new Attribute("ic_attribute_fire", "bg-color-fire");
var attribute3 = new Attribute("ic_attribute_earth", "bg-color-earth");
var attribute4 = new Attribute("ic_attribute_light", "bg-color-light");
var attribute5 = new Attribute("ic_attribute_normal", "bg-color-normal");
var attribute6 = new Attribute("ic_attribute_water", "bg-color-water");

//將屬性變數放進陣列中
var attributes = Array.from({ length: 6 }, function (_, i) {
  var num = i + 1;
  var name = "attribute" + num;
  return eval(name);
});

//將屬性放置欄位中
for (let i = 0; i < attributes.length; i++) {
  const newDiv1 = $('<div>', { class: "attribute-icon-Container" });
  const newDiv2 = $('<div>', { class: "attribute-icon" });
  const newDiv3 = $('<div>', { class: "attribute-img" });
  const newAttributeImg = $('<img>', { src: attributes[i].imgPath, alt: attributes[i].name });

  newDiv3.append(newAttributeImg);
  newDiv3.addClass(attributes[i].color);
  newDiv2.addClass('z-1');
  newDiv2.append(newDiv3);
  newDiv1.append(newDiv2);
  newDiv1.addClass('radiu-4');
  newDiv1.addClass('relative');

  $('.Attribute-list').append(newDiv1);
}

//飾品
class Accessory {
  constructor(name, attribute) {
    this.name = name;
    this.attribute = attribute;
    this.imgPath = "image\\Accessory\\" + name + ".png";
  }
}
//宣告飾品
var accessory1 = new Accessory("Minotaurs Necklace", "all");
var accessory2 = new Accessory("Sniper Goggles", "all");
var accessory3 = new Accessory("Mirror Earring of Faith", "light");
var accessory4 = new Accessory("Mirror Earring of Nobility", "dark");
var accessory5 = new Accessory("Mirror Earring of Patience", "normal");
var accessory6 = new Accessory("Mirror Earring of Worship", "water");
var accessory7 = new Accessory("Mirror Necklace of Riches", "earth");
var accessory8 = new Accessory("Ruby Mirror Ring", "fire");
var accessory9 = new Accessory("Sharp Shooter", "all");


//將飾品放進陣列中
var accessories = Array.from({ length: 9 }, function (_, i) {
  var num = i + 1;
  var name = "accessory" + num;
  return eval(name);
});

for (let i = 0; i < accessories.length; i++) {
  const newDiv1 = $('<div>', { class: "accessory-icon-Container" });
  const newDiv2 = $('<div>', { id: "accessory" + i, class: "accessory-icon" });
  const newDiv3 = $('<div>', { class: "accessory-img" });

  const newRelicImg = $('<img>', { src: accessories[i].imgPath, alt: accessories[i].name });

  newDiv3.append(newRelicImg);
  newDiv2.append(newDiv3);
  newDiv1.append(newDiv2);
  newDiv1.addClass('radiu-4');

  $('.Accessory-list').append(newDiv1);
}

//武器欄位
$('.weapon-img-container').click(function () {
  const $Char_container = $(this).parent();
  const has_heroIcon = $Char_container.find('.char-img-container .hero-icon');
  if (has_heroIcon.length > 0) {
    const clickObject = $(this);
    const selectList = $('.EQ-select-container');
    const removeObject = '.EQ-icon';
    Click_Edit(clickObject, selectList, removeObject);
    $('.EQ-icon-container').addClass('hidden');
    const weapon_Class = $(this).attr('class').split(' ');
    $('.EQ-icon-container').find('.' + weapon_Class[3]).parent().removeClass('hidden');
  }
})

//選擇武器
$('.EQ-icon-container').click(function () {
  $('.EQ-select-container').addClass('hidden');
  var eqIcon = $(this).find('.EQ-icon');
  eqIcon.clone().appendTo('.selection');
  console.log($(this).find('.EQ-icon'));
  $('.selection').removeClass('selection');
})

//加入英雄
$('.hero-icon-Container').click(function () {
  var clickObject = $(this);
  var selectList = $('.Char-select-container');
  var copyObject = $('.hero-icon');
  var heroClassSplit = clickObject.attr('class').split(' ');
  var $Chain_Container = $('.selection').parent();
  $Chain_Container.find('.char-img-container').addClass(heroClassSplit[1]);
  $Chain_Container.find('.weapon-img-container').addClass(heroClassSplit[2]);

  const $Team_container = clickObject.parents('.Team-container');
  const $chain_container = $Team_container.find('.header .chain-container');

  var optionValue = $Chain_Container.data('option');//hero1、hero2、hero3、hero4
  if (optionValue == "hero1") {
    $chain_container.find('.chain-Select-1').attr('src', clickObject.find('.hero-img img').attr('src'));
  }
  if (optionValue == "hero2") {
    $chain_container.find('.chain-Select-2').attr('src', clickObject.find('.hero-img img').attr('src'));
  }
  if (optionValue == "hero3") {
    $chain_container.find('.chain-Select-3').attr('src', clickObject.find('.hero-img img').attr('src'));
  }
  if (optionValue == "hero4") {
    $chain_container.find('.chain-Select-4').attr('src', clickObject.find('.hero-img img').attr('src'));
  }
  Click_Icon(clickObject, selectList, copyObject);
})

//移除英雄
$('.char-img-container').click(function () {
  const clickObject = $(this);
  const selectList = $('.Char-select-container');
  const removeObject = '.hero-icon';

  if (clickObject.find('.hero-icon').length > 0) {
    const $Chain_Container = clickObject.parent();
    const $char_img_container = $Chain_Container.find('.char-img-container');
    const $weapon_img_container = $Chain_Container.find('.weapon-img-container');
    const heroClass = $char_img_container.attr('class').split(' ');
    const weaponClass = $weapon_img_container.attr('class').split(' ');
    $weapon_img_container.find('.EQ-icon').remove();
    $char_img_container.removeClass(heroClass[3]);
    $weapon_img_container.removeClass(weaponClass[3]);
  }

  Click_Edit(clickObject, selectList, removeObject);
})

//加入遺物
$('.relic-icon-Container').click(function () {
  var clickObject = $(this);
  var selectList = $('.Relic-select-container');
  var copyObject = $('.relic-icon');
  Click_Icon(clickObject, selectList, copyObject);
})

//選擇遺物、移除遺物
$('.Relic-img-container').click(function () {
  var clickObject = $(this);
  var selectList = $('.Relic-select-container');
  var removeObject = ".relic-icon";
  Click_Edit(clickObject, selectList, removeObject);
})

//選擇飾品、移除飾品
$('.Accessory-img-container').click(function () {
  var clickObject = $(this);
  var selectList = $('.Accessory-select-container');
  var removeObject = ".accessory-icon";
  Click_Edit(clickObject, selectList, removeObject);
})
//加入飾品
$('.accessory-icon-Container').click(function () {
  var clickObject = $(this);
  var selectList = $('.Accessory-select-container');
  var copyObject = $('.accessory-icon');
  Click_Icon(clickObject, selectList, copyObject);
})

//選擇的BOSS
$('.BOSS-icon-Container').click(function () {
  var clickObject = $(this);
  var selectList = $('.BOSS-select-container');
  var copyObject = $('.BOSS-icon');
  var boss_name = clickObject.find('.BOSS-icon .BOSS-img img').attr('alt')
  Click_Icon(clickObject, selectList, copyObject);
  $('.boss-Name').text(boss_name);
  //$('.boss-Name').removeClass('boss-Name');
})

//顯示的BOSS
$('.BOSS-img-container').click(function () {
  var clickObject = $(this);
  var selectList = $('.BOSS-select-container');
  var removeObject = ".BOSS-icon";
  Click_Edit(clickObject, selectList, removeObject);
  var bossTextObject = clickObject.parent().find('.BOSS-Name-container');
  bossTextObject.text('');
  bossTextObject.addClass('boss-Name');
})

//選擇的屬性
$('.attribute-icon-Container').click(function () {
  var clickObject = $(this);
  var selectList = $('.Attribute-select-container');
  var copyObject = $('.attribute-icon');
  Click_Icon(clickObject, selectList, copyObject);
})

//顯示的屬性
$('.Attr-img-container').click(function () {
  var clickObject = $(this);
  var selectList = $('.Attribute-select-container');
  var removeObject = ".attribute-icon";
  Click_Edit(clickObject, selectList, removeObject);
})

//編輯器範本
var teamTemplate = $('.Team-container').clone(true);
$('#newTeam').click(function () {
  var copyDiv = teamTemplate.clone(true);
  copyDiv.appendTo('.Team');
})
$(document).on('click', '.removeTeam', function () {
  click_RemoveButton($(this).parent());
})

//移除功能
function click_RemoveButton(click_Object) {
  //遍歷class
  click_Object.parent().find('.edit_Team .Char-container .char-img-container').each(function () {
    var heroClassSplit = $(this).attr('class').split(' ');
    $('.' + heroClassSplit[3]).removeClass('hidden');
  })
  click_Object.parent().find('.select_Item .selectList').each(function () {
    $('.Windows').append($(this));
  })
  click_Object.parent().remove();
}

function Click_Edit(clickObject, selectList, removeObject) {
  $('.boss-Name').removeClass('boss-Name');
  $('.selectList').addClass('hidden');
  if (clickObject.hasClass('selection')) {
    $('.selection').removeClass('selection');
  } else {
    $('.selection').removeClass('selection');
    clickObject.addClass('selection');
    clickObject.find(removeObject).remove();
    selectList.removeClass('hidden');
    selectList.appendTo(clickObject.parents('.Team-container').find('.select_Item'));
  }
}

function Click_Icon(clickObject, selectList, copyObject) {
  selectList.addClass('hidden');
  var iconClass = clickObject.find(copyObject);
  //console.log(iconClass);

  //const relicDiv = $(this).find('.relic-icon');
  //relicDiv.clone().appendTo($('.selection'));
  iconClass.clone().appendTo($('.selection'));

  $('.selection').removeClass('selection');
}

var keepSrc;
var keepAlt;

$(document).on('click', '.option', function () {
  var selectedDropdown = $(this).find('.dropdown img.selected');
  if (selectedDropdown.length > 0) {
    console.log('a');
    keepSrc = selectedDropdown.attr('src');
    //var selectedImageSrc = selectedDropdown.attr('src');
    $(this).find('img:first').attr('src', keepSrc);
    //$(this).find('img:first').attr('src', Alt);
    $(this).find('.dropdown').attr('style', 'display:none');
  }
})

$(document).on('click', '.chain-Select-now', function () {
  //console.log($('.chain-Select-now').length);
  const $this_Top_Parent = $(this).parent().parent().parent();
  //連鎖icon數量>1
  if ($this_Top_Parent.find('.chain-icon-time').length > 1) {
    $(this).parent().parent().remove();
  }
})
$(document).on('click', '.dropdown img', function () {
  $(this).siblings().removeClass('selected');
  $(this).addClass('selected');
})

//滑進效果
$(document).on("mouseenter", ".option", function () {
  $(this).find('.dropdown').attr('style', 'display:block');
  keepSrc = $(this).find('.chain-Select-now').attr('src');
  keepAlt = $(this).find('.chain-Select-now').attr('alt');
  $(this).find('.chain-Select-now').attr('src', 'image/UI/removeButton.png');
  $(this).find('.chain-Select-now').attr('alt', 'del_Chain');
})
//滑出效果
$(document).on("mouseleave", ".option", function () {
  $(this).find('.dropdown').attr('style', 'display:none');
  $(this).find('.chain-Select-now').attr('src', keepSrc);
  $(this).find('.chain-Select-now').attr('alt', keepAlt);
})

//複製連鎖時間
//var $chain_Container = $('.chain-container').clone(true);
$(document).on("click", ".add-chain-time", function () {
  const $chain_container = $(this).parent();
  const copyTo = $chain_container.parent();
  $chain_container.clone(true).appendTo(copyTo);

  const $herder = $(this).parents('.header');
  //const $chain_containers = $herder.find('.chain-container');
  const $chain_containers = $('.chain-container');
  $chain_containers.each(function (index) {
    $(this).css('z-index', 30 - index);
  })
})

$(document).on("click", ".del-chain-time", function () {
  const $header = $(this).parents('.header');
  //連鎖段數大於1組
  if ($header.find('.chain-container').length > 1) {
    const $chain_container = $(this).parent();
    $chain_container.remove();
  }
})

//新增按紐(複製連鎖小圖示)
$(document).on("click", ".add-chain-icon", function () {
  const copyTo = $(this).parent().find('.chain-icon-time-conatiner');
  const cloneObject = $('.chain-icon-time:first').clone(true);
  //連鎖數量<4
  if (copyTo.find('.chain-icon-time').length < 4) {
    //$chain_icon_time.clone(true).appendTo(copyTo);
    cloneObject.clone(true).appendTo(copyTo);
  }
})

$(document).ready(function () {
  $('#BOSS-info-Checkbox').change(function () {
    if ($(this).prop('checked')) {
      $('.BOSS-container').addClass('hidden');
    } else {
      $('.BOSS-container').removeClass('hidden');
    }
  });
})
