class Hero {
  constructor(name, attribute, rarity, ChainSkill1, ChainSkill2, sort1, sort2) {
    this.name = name;
    this.attribute = attribute;
    this.imgPath = "image\\character_icon\\" + attribute + "\\" + name + ".png";
    this.rarity = rarity;
    this.chain1_imgPath = "image\\abnormal\\" + ChainSkill1 + ".png";
    this.chain2_imgPath = "image\\abnormal\\" + ChainSkill2 + ".png";
    this.sort1 = sort1;
    this.sort2 = sort2;
  }
}

var hero1 = new Hero("Plitvice", "fire", 3, "injured", "downed", "Two-Handed", "");
var hero2 = new Hero("Plitvice", "fire", 3, "downed", "airborne", "One-Handed", "");
var hero3 = new Hero("Lapice", "light", 3, "downed", "airborne", "One-Handed", "Shield");
var hero4 = new Hero("Lapice", "light", 3, "injured", "downed", "Two-Handed", "");
var hero5 = new Hero("Marina", "water", 3, "All", "injured", "One-Handed", "");
var hero6 = new Hero("Arabelle", "dark", 3, "injured", "downed", "Rifle", "");
var hero7 = new Hero("IdolCaptainEva", "normal", 3, "All", "downed", "Staff", "");
var hero8 = new Hero("Bari", "earth", 3, "injured", "downed", "Basket", "");
var hero9 = new Hero("Lupina", "dark", 3, "injured", "airborne", "Staff", "");
var hero10 = new Hero("Lahn", "normal", 3, "airborne", "injured", "Gauntlet", "");
var hero11 = new Hero("Lahn", "normal", 3, "airborne", "downed", "Basket", "");
var hero12 = new Hero("Eugene", "light", 3, "injured", "downed", "Two-Handed", "");
var hero13 = new Hero("Tinia", "earth", 3, "injured", "airborne", "Bow", "");
var hero14 = new Hero("Vishuvac", "fire", 3, "All", "injured", "Claw", "");
var hero15 = new Hero("Vishuvac", "fire", 3, "All", "airborne", "Gauntlet", "");
var hero16 = new Hero("Nari", "normal", 3, "downed", "airborne", "Basket", "");
var hero17 = new Hero("Bianca", "water", 3, "airborne", "downed", "Two-Handed", "");
var hero18 = new Hero("Oghma", "dark", 3, "downed", "injured", "One-Handed", "Shield");
var hero19 = new Hero("Oghma", "dark", 3, "airborne", "injured", "Rifle", "Shield");
var hero20 = new Hero("Alef", "earth", 3, "airborne", "downed", "Gauntlet", "");
var hero21 = new Hero("Miya", "fire", 3, "All", "downed", "Basket", "");
var hero22 = new Hero("FuturePrincess", "light", 3, "injured", "downed", "Staff", "");
var hero23 = new Hero("Garam", "water", 3, "downed", "airborne", "Bow", "");
var hero24 = new Hero("Beth", "dark", 3, "downed", "injured", "Two-Handed", "");
var hero25 = new Hero("Rue", "earth", 3, "downed", "injured", "Rifle", "");
var hero26 = new Hero("Rue", "earth", 3, "All", "downed", "Two-Handed", "");
var hero27 = new Hero("Gabriel", "light", 3, "All", "injured", "Bow", "");
var hero28 = new Hero("Lynn", "fire", 3, "downed", "injured", "One-Handed", "");
var hero29 = new Hero("FutureKnight", "normal", 3, "downed", "airborne", "Rifle", "");
var hero30 = new Hero("FutureKnight", "normal", 3, "airborne", "injured", "Two-Handed", "");
var hero31 = new Hero("Veronica", "water", 3, "All", "downed", "Staff", "");
var hero32 = new Hero("Noxia", "dark", 3, "All", "airborne", "Basket", "");
var hero33 = new Hero("Mayreel", "earth", 3, "downed", "injured", "Claw", "");
var hero34 = new Hero("MK99", "light", 3, "downed", "injured", "Rifle", "");
var hero35 = new Hero("Lilith", "dark", 3, "injured", "downed", "Claw", "");
var hero36 = new Hero("Lucy", "fire", 3, "airborne", "downed", "Staff", "");
var hero37 = new Hero("BeachSohee", "normal", 3, "injured", "airborne", "Two-Handed", "");
var hero38 = new Hero("BeachYuze", "water", 3, "downed", "airborne", "Two-Handed", "");
var hero39 = new Hero("Eleanor", "light", 3, "All", "downed", "Basket", "");
var hero40 = new Hero("Scintilla", "fire", 3, "downed", "injured", "Gauntlet", "");
var hero41 = new Hero("Erina", "normal", 3, "downed", "injured", "One-Handed", "Shield");
var hero42 = new Hero("Kamael", "earth", 3, "airborne", "injured", "Staff", "");
var hero43 = new Hero("MK2", "dark", 3, "airborne", "injured", "Rifle", "");
var hero44 = new Hero("Orca", "water", 3, "airborne", "downed", "Rifle", "");
var hero45 = new Hero("Kanna", "normal", 3, "All", "downed", "Staff", "");
var hero46 = new Hero("Hana", "water", 3, "injured", "downed", "Staff", "");
var hero47 = new Hero("Carol", "light", 3, "injured", "downed", "One-Handed", "");
var hero48 = new Hero("Clara", "fire", 3, "airborne", "injured", "Bow", "");
var hero49 = new Hero("Parvati", "earth", 3, "downed", "injured", "Gauntlet", "");
var hero50 = new Hero("Priscilla", "light", 3, "injured", "downed", "Basket", "");
var hero51 = new Hero("Claude", "dark", 3, "downed", "airborne", "Gauntlet", "");
var hero52 = new Hero("Ara", "water", 3, "downed", "injured", "Basket", "");
var hero53 = new Hero("Rey", "fire", 3, "injured", "downed", "One-Handed", "");
var hero54 = new Hero("AA72", "water", 3, "airborne", "downed", "Rifle", "");
var hero55 = new Hero("SummerLoraine", "normal", 3, "downed", "injured", "Basket", "");
var hero56 = new Hero("MadPandaTrio", "earth", 3, "downed", "injured", "Gauntlet", "");
var hero57 = new Hero("MissChrome", "normal", 3, "injured", "downed", "Rifle", "");
var hero58 = new Hero("Valencia", "light", 3, "downed", "injured", "One-Handed", "");
var hero59 = new Hero("Crosselle", "dark", 3, "downed", "airborne", "Gauntlet", "");
var hero60 = new Hero("Andras", "water", 3, "All", "downed", "Staff", "");
var hero61 = new Hero("Sumire", "dark", 3, "downed", "injured", "Claw", "");
var hero62 = new Hero("Pymon", "fire", 3, "downed", "injured", "Gauntlet", "");
var hero63 = new Hero("Rosetta", "earth", 3, "injured", "airborne", "Rifle", "");
var hero64 = new Hero("WhiteSnow", "water", 3, "airborne", "injured", "Gauntlet", "");
var hero65 = new Hero("CorpsCommander", "dark", 3, "injured", "airborne", "Staff", "");
var hero66 = new Hero("Kai", "light", 3, "downed", "injured", "One-Handed", "");
var hero67 = new Hero("ChunRyeo", "light", 3, "downed", "airborne", "Basket", "");
var hero68 = new Hero("Ameris", "earth", 3, "airborne", "downed", "Claw", "");
var hero69 = new Hero("Sia", "water", 3, "All", "downed", "Basket", "");
var hero70 = new Hero("BeachAmy", "fire", 3, "injured", "airborne", "One-Handed", "");
var hero71 = new Hero("Eunha", "normal", 3, "downed", "airborne", "Basket", "");
var hero72 = new Hero("BeachShapira", "light", 3, "injured", "downed", "Two-Handed", "");
var hero73 = new Hero("Lina", "fire", 3, "injured", "airborne", "Gauntlet", "");
var hero74 = new Hero("Gourry", "light", 3, "downed", "airborne", "Two-Handed", "");
var hero75 = new Hero("Xelloss", "dark", 3, "All", "downed", "Staff", "");
var hero76 = new Hero("Dai", "normal", 3, "downed", "airborne", "One-Handed", "");
var hero77 = new Hero("Maam", "earth", 3, "injured", "airborne", "Gauntlet", "");
var hero78 = new Hero("Popp", "fire", 3, "airborne", "downed", "Staff", "");
var hero79 = new Hero("FemaleKnight", "normal", 2, "airborne", "downed", "One-Handed", "");
var hero80 = new Hero("FemaleKnight", "normal", 2, "airborne", "downed", "Bow", "");
var hero81 = new Hero("Eva", "light", 2, "airborne", "downed", "Staff", "");
var hero82 = new Hero("Elvira", "fire", 2, "airborne", "downed", "Rifle", "");
var hero83 = new Hero("Elvira_Ascended", "fire", 3, "airborne", "downed", "Rifle", "");
var hero84 = new Hero("WhiteBeast", "water", 2, "injured", "airborne", "Claw", "");
var hero85 = new Hero("Karina", "dark", 2, "downed", "injured", "Staff", "");
var hero86 = new Hero("Karina_Ascended", "dark", 3, "All", "injured", "Staff", "");
var hero87 = new Hero("Loraine", "normal", 2, "All", "injured", "Basket", "");
var hero88 = new Hero("Lavi", "fire", 2, "downed", "airborne", "Gauntlet", "");
var hero89 = new Hero("Favi", "water", 2, "All", "injured", "Basket", "");
var hero90 = new Hero("Aoba", "earth", 2, "All", "downed", "Bow", "");
var hero91 = new Hero("Gremory", "dark", 2, "All", "airborne", "Basket", "");
var hero92 = new Hero("Rachel", "water", 2, "injured", "downed", "Rifle", "");
var hero93 = new Hero("Hekate", "earth", 2, "downed", "injured", "Rifle", "");
var hero94 = new Hero("Coco", "water", 2, "injured", "airborne", "Staff", "");
var hero95 = new Hero("Marianne", "earth", 2, "downed", "airborne", "Rifle", "");
var hero96 = new Hero("Sohee", "light", 2, "downed", "airborne", "Rifle", "");
var hero97 = new Hero("Mei", "light", 2, "downed", "airborne", "Gauntlet", "");
var hero98 = new Hero("Mei_Ascended", "light", 3, "downed", "airborne", "Gauntlet", "");
var hero99 = new Hero("Fei", "light", 2, "downed", "airborne", "Gauntlet", "");
var hero100 = new Hero("Fei_Ascended", "light", 3, "downed", "airborne", "Gauntlet", "");
var hero101 = new Hero("Marvin", "earth", 2, "airborne", "downed", "Gauntlet", "");
var hero102 = new Hero("Craig", "earth", 2, "downed", "airborne", "One-Handed", "Shield");
var hero103 = new Hero("Craig_Ascended", "earth", 3, "downed", "airborne", "One-Handed", "Shield");
var hero104 = new Hero("Akayuki", "fire", 2, "injured", "downed", "One-Handed", "");
var hero105 = new Hero("Ranpang", "normal", 2, "injured", "airborne", "Gauntlet", "");
var hero106 = new Hero("Yuze", "dark", 2, "airborne", "injured", "Two-Handed", "");
var hero107 = new Hero("Aisha", "light", 2, "All", "downed", "One-Handed", "Shield");
var hero108 = new Hero("Shapira", "dark", 2, "airborne", "downed", "Two-Handed", "");
var hero109 = new Hero("Dolf", "fire", 2, "downed", "injured", "Staff", "");
var hero110 = new Hero("Amy", "normal", 2, "downed", "injured", "Two-Handed", "");
var hero111 = new Hero("Girgas", "fire", 2, "injured", "airborne", "Staff", "");
var hero112 = new Hero("Catherine", "water", 2, "airborne", "injured", "Bow", "");
var hero113 = new Hero("Rie", "normal", 2, "airborne", "downed", "One-Handed", "");
var hero114 = new Hero("Neva", "light", 2, "downed", "injured", "Two-Handed", "");





//將英雄變數放進陣列中
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
  const newHeroImg = $('<img>', { src: heros[i].imgPath, alt: heros[i].name });
  const newGrid = $('<div>', { class: "hero-icon-grid" });
  const newAbnormalImg1 = $('<img>', { class: "grid-abnormal-state1", src: heros[i].chain1_imgPath });
  const newAbnormalImg2 = $('<img>', { class: "grid-abnormal-state2", src: heros[i].chain2_imgPath });

  newGrid.append(newAbnormalImg1);
  newGrid.append(newAbnormalImg2);
  //newHeroImg.addClass('radiu-7');
  newDiv3.append(newHeroImg);
  newDiv2.append(newGrid);
  newDiv2.append(newDiv3);
  newDiv1.append(newDiv2);
  newDiv1.addClass(heros[i].name);
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
  constructor(name, state, attribute, rarity, ex, heroName, sort) {
    this.name = name;
    this.state = "image\\abnormal\\" + state + ".png";
    this.ex = ex;
    this.heroName = heroName;
    this.attribute = attribute;
    this.imgPath = "image\\Weapons\\" + attribute + "\\" + name + ".png";
    this.sort = sort;
    this.rarity = rarity;
  }
}

var weapon1 = new Weapon("Innocent", "Downed", "light", "Epic", "Express", "Lapice", "One-Handed");
var weapon2 = new Weapon("Armada", "Downed", "water", "Epic", "Express", "Marina", "One-Handed");
var weapon3 = new Weapon("Eckesachs", "Downed", "dark", "Epic", "Express", "None", "One-Handed");
var weapon4 = new Weapon("Red Lotus", "Downed", "fire", "Epic", "Express", "Lynn", "One-Handed");
var weapon5 = new Weapon("Balmung", "Downed", "normal", "Epic", "Express", "Erina", "One-Handed");
var weapon6 = new Weapon("Little Star", "injured", "light", "Epic", "Express", "Carol", "One-Handed");
var weapon7 = new Weapon("Heavenly Perfection", "injured", "fire", "Epic", "Express", "Rey", "One-Handed");
var weapon8 = new Weapon("Arges", "Downed", "light", "Epic", "Express", "Valencia", "One-Handed");
var weapon9 = new Weapon("Halo", "Downed", "fire", "Epic", "Express", "Plitvice", "One-Handed");
var weapon10 = new Weapon("Epic One Handed Sword", "Downed", "light", "Epic", "Express", "Kai", "One-Handed");
var weapon11 = new Weapon("Parashu", "injured", "fire", "Epic", "Express", "BeachAmy", "One-Handed");
var weapon12 = new Weapon("Sword of Dai", "Downed", "normal", "Epic", "Express", "Dai", "One-Handed");
var weapon13 = new Weapon("Murasame", "injured", "fire", "Legend", "Express", "Akayuki", "One-Handed");
var weapon14 = new Weapon("Libera", "airborne", "normal", "Legend", "Express", "None", "One-Handed");
var weapon15 = new Weapon("Silence", "Downed", "earth", "Legend", "Express", "Craig", "One-Handed");
var weapon16 = new Weapon("Veritas", "airborne", "light", "Legend", "Express", "Aisha", "One-Handed");
var weapon17 = new Weapon("Prominence", "injured", "fire", "Epic", "Express", "Plitvice", "Two-Handed");
var weapon18 = new Weapon("Brave Heart", "airborne", "light", "Epic", "Express", "Eugene", "Two-Handed");
var weapon19 = new Weapon("Astarte", "airborne", "water", "Epic", "Express", "Bianca", "Two-Handed");
var weapon20 = new Weapon("Predator", "Downed", "dark", "Epic", "Express", "Beth", "Two-Handed");
var weapon21 = new Weapon("Nereid", "injured", "normal", "Epic", "Express", "BeachSohee", "Two-Handed");
var weapon22 = new Weapon("Ocean Keeper", "Downed", "water", "Epic", "Express", "BeachYuze", "Two-Handed");
var weapon23 = new Weapon("Atomic Destroyer", "airborne", "normal", "Epic", "Express", "None", "Two-Handed");
var weapon24 = new Weapon("Radiant", "injured", "light", "Epic", "Express", "Lapice", "Two-Handed");
var weapon25 = new Weapon("Nightmare", "injured", "earth", "Epic", "Express", "None", "Two-Handed");
var weapon26 = new Weapon("Loyal Shovel", "injured", "light", "Epic", "Express", "BeachShapira", "Two-Handed");
var weapon27 = new Weapon("Sword of Light", "Downed", "light", "Epic", "Express", "Gourry", "Two-Handed");
var weapon28 = new Weapon("Geminus", "Downed", "normal", "Legend", "Express", "Amy", "Two-Handed");
var weapon29 = new Weapon("Tartaros", "airborne", "dark", "Legend", "Express", "Yuze", "Two-Handed");
var weapon30 = new Weapon("Fafnir", "airborne", "dark", "Legend", "Express", "Shapira", "Two-Handed");
var weapon31 = new Weapon("Deer Horn", "airborne", "earth", "Legend", "Normal", "None", "Two-Handed");
var weapon32 = new Weapon("Earth Song Two-Handed Sword", "airborne", "earth", "Unique", "Normal", "None", "Two-Handed");
var weapon33 = new Weapon("Genocide", "injured", "dark", "Epic", "Express", "Arabelle", "Rifle");
var weapon34 = new Weapon("Terminator", "injured", "earth", "Epic", "Express", "None", "Rifle");
var weapon35 = new Weapon("Cosmic Destroyer", "Downed", "normal", "Epic", "Express", "None", "Rifle");
var weapon36 = new Weapon("Omega Blaster", "Downed", "light", "Epic", "Express", "MK99", "Rifle");
var weapon37 = new Weapon("Rebellion", "airborne", "dark", "Epic", "Express", "MK2", "Rifle");
var weapon38 = new Weapon("Nnemesis", "airborne", "water", "Epic", "Express", "Orca", "Rifle");
var weapon39 = new Weapon("Blue Spear", "airborne", "water", "Epic", "Express", "AA72", "Rifle");
var weapon40 = new Weapon("Eckesachs Mode.R", "airborne", "dark", "Epic", "Express", "None", "Rifle");
var weapon41 = new Weapon("Black Mamba", "injured", "normal", "Epic", "Express", "MissChrome", "Rifle");
var weapon42 = new Weapon("Ratel", "injured", "earth", "Epic", "Express", "Rosetta", "Rifle");
var weapon43 = new Weapon("Trouble Maker", "airborne", "fire", "Legend", "Express", "Elvira", "Rifle");
var weapon44 = new Weapon("Merciless", "Downed", "earth", "Legend", "Express", "Marianne", "Rifle");
var weapon45 = new Weapon("Blue Rose", "injured", "water", "Legend", "Express", "Rachel", "Rifle");
var weapon46 = new Weapon("Magiton Buster", "Downed", "light", "Legend", "Express", "Sohee", "Rifle");
var weapon47 = new Weapon("Sarnga", "injured", "earth", "Epic", "Express", "Tinia", "Bow");
var weapon48 = new Weapon("Thousand Thunder", "Downed", "water", "Epic", "Express", "Garam", "Bow");
var weapon49 = new Weapon("Magnificat", "Downed", "light", "Epic", "Express", "Gabriel", "Bow");
var weapon50 = new Weapon("Paimon's Fragment III", "airborne", "fire", "Epic", "Express", "Pymon", "Bow");
var weapon51 = new Weapon("Marauder", "airborne", "water", "Legend", "Express", "Catherine", "Bow");
var weapon52 = new Weapon("Oberon", "airborne", "earth", "Legend", "Express", "Aoba", "Bow");
var weapon53 = new Weapon("Libera Type.B", "airborne", "normal", "Legend", "Express", "None", "Bow");
var weapon54 = new Weapon("Yellow Dragon's Bow", "injured", "light", "Epic", "Normal", "None", "Bow");
var weapon55 = new Weapon("Wing of Terror", "injured", "dark", "Legend", "Normal", "None", "Bow");
var weapon56 = new Weapon("Mayreel", "injured", "earth", "Epic", "Express", "Bari", "Basket");
var weapon57 = new Weapon("Sage Bead", "Downed", "normal", "Epic", "Express", "Nari", "Basket");
var weapon58 = new Weapon("Shangri La", "airborne", "fire", "Epic", "Express", "Miya", "Basket");
var weapon59 = new Weapon("Furfur", "Downed", "dark", "Epic", "Express", "Noxia", "Basket");
var weapon60 = new Weapon("Benedictus", "injured", "light", "Epic", "Express", "Eleanor", "Basket");
var weapon61 = new Weapon("Eclipse", "injured", "light", "Epic", "Express", "Priscilla", "Basket");
var weapon62 = new Weapon("Bringer of Tranquility", "Downed", "water", "Epic", "Express", "Ara", "Basket");
var weapon63 = new Weapon("Ocean Call", "Downed", "normal", "Epic", "Express", "SummerLoraine", "Basket");
var weapon64 = new Weapon("Elusive Reflection", "airborne", "normal", "Epic", "Express", "None", "Basket");
var weapon65 = new Weapon("Secret Book of the Shen Mountain Fist", "Downed", "light", "Epic", "Express", "ChunRyeo", "Basket");
var weapon66 = new Weapon("Oceans Tear", "injured", "water", "Epic", "Express", "Sia", "Basket");
var weapon67 = new Weapon("Infinite Change", "Downed", "normal", "Epic", "Express", "Eunha", "Basket");
var weapon68 = new Weapon("Emma", "Downed", "normal", "Legend", "Express", "Loraine", "Basket");
var weapon69 = new Weapon("Jack Frost", "Downed", "water", "Legend", "Express", "Favi", "Basket");
var weapon70 = new Weapon("Curiosity Solver", "injured", "dark", "Legend", "Express", "Gremory", "Basket");
var weapon71 = new Weapon("Shining Jewel Basket", "Downed", "light", "Legend", "Normal", "None", "Basket");
var weapon72 = new Weapon("Shark Basket", "airborne", "water", "Unique", "Normal", "None", "Basket");
var weapon73 = new Weapon("Angel Voice", "airborne", "normal", "Epic", "Express", "IdolCaptainEva", "Staff");
var weapon74 = new Weapon("Amarok", "injured", "dark", "Epic", "Express", "Lupina", "Staff");
var weapon75 = new Weapon("Liberator", "injured", "light", "Epic", "Express", "FuturePrincess", "Staff");
var weapon76 = new Weapon("Messiah", "airborne", "water", "Epic", "Express", "Veronica", "Staff");
var weapon77 = new Weapon("Fantasia", "airborne", "fire", "Epic", "Express", "Lucy", "Staff");
var weapon78 = new Weapon("Equinox", "airborne", "earth", "Epic", "Express", "Kamael", "Staff");
var weapon79 = new Weapon("Mind Snap", "injured", "normal", "Epic", "Express", "Kanna", "Staff");
var weapon80 = new Weapon("Unchained", "injured", "water", "Epic", "Express", "Hana", "Staff");
var weapon81 = new Weapon("Head Hunter", "airborne", "water", "Epic", "Express", "Andras", "Staff");
var weapon82 = new Weapon("Fail-not", "injured", "dark", "Epic", "Express", "CorpsCommander", "Staff");
var weapon83 = new Weapon("Xellos' Staff", "airborne", "dark", "Epic", "Express", "Xelloss", "Staff");
var weapon84 = new Weapon("Black Rod", "airborne", "fire", "Epic", "Express", "Popp", "Staff");
var weapon85 = new Weapon("Witch Heart", "injured", "water", "Legend", "Express", "Coco", "Staff");
var weapon86 = new Weapon("Crescent Moon", "Downed", "dark", "Legend", "Express", "Karina", "Staff");
var weapon87 = new Weapon("Justice", "airborne", "light", "Legend", "Express", "Eva", "Staff");
var weapon88 = new Weapon("Helios", "Downed", "fire", "Legend", "Express", "Dolf", "Staff");
var weapon89 = new Weapon("Wrath of Dragon", "injured", "fire", "Legend", "Express", "Girgas", "Staff");
var weapon90 = new Weapon("Yellow's Mysterious Staff", "injured", "light", "Epic", "Normal", "None", "Staff");
var weapon91 = new Weapon("Authority of Light Staff", "injured", "light", "Epic", "Normal", "None", "Staff");
var weapon92 = new Weapon("Jewel of Verdure Staff", "injured", "earth", "Legend", "Normal", "None", "Staff");
var weapon93 = new Weapon("Harvest Staff", "Downed", "earth", "Unique", "Normal", "None", "Staff");
var weapon94 = new Weapon("Forest Keeper Staff", "airborne", "earth", "Unique", "Normal", "None", "Staff");
var weapon95 = new Weapon("Pure Mind", "airborne", "normal", "Epic", "Express", "None", "Gauntlet");
var weapon96 = new Weapon("Ouros", "airborne", "earth", "Epic", "Express", "Alef", "Gauntlet");
var weapon97 = new Weapon("Ifrit", "Downed", "fire", "Epic", "Express", "Scintilla", "Gauntlet");
var weapon98 = new Weapon("Office Supply", "Downed", "earth", "Epic", "Express", "Parvati", "Gauntlet");
var weapon99 = new Weapon("Twilight", "Downed", "dark", "Epic", "Express", "Claude", "Gauntlet");
var weapon100 = new Weapon("Volcanic Core", "injured", "fire", "Epic", "Express", "None", "Gauntlet");
var weapon101 = new Weapon("Prestige", "Downed", "earth", "Epic", "Express", "MadPandaTrio", "Gauntlet");
var weapon102 = new Weapon("Permission Denied", "Downed", "dark", "Epic", "Express", "Crosselle", "Gauntlet");
var weapon103 = new Weapon("Planet Buster", "Downed", "fire", "Epic", "Express", "Pymon", "Gauntlet");
var weapon104 = new Weapon("Snow Maker", "airborne", "water", "Epic", "Express", "WhiteSnow", "Gauntlet");
var weapon105 = new Weapon("Demon's Blood Talisman", "injured", "fire", "Epic", "Express", "Lina", "Gauntlet");
var weapon106 = new Weapon("Dark Armour Fist", "injured", "earth", "Epic", "Express", "Maam", "Gauntlet");
var weapon107 = new Weapon("Vulkan", "airborne", "earth", "Legend", "Express", "Marvin", "Gauntlet");
var weapon108 = new Weapon("Pride of Fighter", "Downed", "light", "Legend", "Express", "Mei", "Gauntlet");
var weapon109 = new Weapon("Pulverizer", "Downed", "fire", "Legend", "Express", "Lavi", "Gauntlet");
var weapon110 = new Weapon("Volcanic Horn", "airborne", "fire", "Epic", "Express", "None", "Claw");
var weapon111 = new Weapon("Solaris", "Downed", "earth", "Epic", "Express", "Mayreel", "Claw");
var weapon112 = new Weapon("Queen's Grace", "injured", "dark", "Epic", "Express", "Lilith", "Claw");
var weapon113 = new Weapon("Kagemaru", "Downed", "dark", "Epic", "Express", "Sumire", "Claw");
var weapon114 = new Weapon("Dragon Fang", "airborne", "earth", "Epic", "Express", "Ameris", "Claw");
var weapon115 = new Weapon("Firm Determination", "injured", "normal", "Legend", "Express", "Ranpang", "Claw");
var weapon116 = new Weapon("Fenrir", "injured", "water", "Legend", "Express", "WhiteBeast", "Claw");




//將武器變數放進陣列中
var weapons = Array.from({ length: 115 }, function (_, i) {
  var num = i + 1;
  var name = "weapon" + num;
  return eval(name);
});

for (let i = 0; i < weapons.length; i++) {
  const newDiv1 = $('<div>', { class: "EQ-icon-container" });
  const newDiv2 = $('<div>', { id: "weapon" + i, class: "EQ-icon", style: "display:inline-block" });
  const newWeaponImg = $('<img>', { class: "EQ-icon-img", src: weapons[i].imgPath, alt: weapons[i].name });
  newDiv1.append(newDiv2);
  newDiv1.addClass('radiu-4');
  if (weapons[i].ex === "Express") {
    $('.ex-Weapon-container').append(newDiv1);
    $('#weapon' + i).append(newWeaponImg);
    $('#weapon' + i).addClass(weapons[i].sort);
  } else {
    $('.base-Weapon-container').append(newDiv1);
    $('#weapon' + i).append(newWeaponImg);
    $('#weapon' + i).addClass(weapons[i].sort);
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

//將遺物變數放進陣列中
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
  constructor(name,attribute) {
    this.name = name;
    this.attribute = attribute;
    this.imgPath = "image\\Accessory\\" + name + ".png";
  }
}
//宣告飾品
var accessory1 = new Accessory("Minotaurs Necklace", "all");
var accessory2 = new Accessory("Mirror Earring of Faith", "light");
var accessory3 = new Accessory("Mirror Earring of Nobility", "dark");
var accessory4 = new Accessory("Mirror Earring of Patience", "normal");
var accessory5 = new Accessory("Mirror Earring of Worship", "water");
var accessory6 = new Accessory("Mirror Necklace of Riches", "earth");
var accessory7 = new Accessory("Ruby Mirror Ring", "fire");
var accessory8 = new Accessory("Sharp Shooter", "all");
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
  //判斷是否有角色
  const $Char_container = $(this).parent();
  const has_heroIcon = $Char_container.find('.char-img-container .hero-icon');
  if (has_heroIcon.length > 0) {
    //移除武器
    const clickObject = $(this);
    const selectList = $('.EQ-select-container');
    const removeObject = '.EQ-icon';
    Click_Edit(clickObject, selectList, removeObject);
    //隱藏所有武器
    $('.EQ-icon-container').addClass('hidden');
    //顯示類型武器
    const weapon_Class = $(this).attr('class').split(' ');
    $('.EQ-icon-container').find('.' + weapon_Class[3]).parent().removeClass('hidden');
  }
})

//選擇武器
$('.EQ-icon-container').click(function () {
  //隱藏武器清單
  $('.EQ-select-container').addClass('hidden');

  var eqIcon = $(this).find('.EQ-icon');
  eqIcon.clone().appendTo('.selection');
  console.log($(this).find('.EQ-icon'));

  //取消選取顯示
  $('.selection').removeClass('selection');
})

//加入英雄
$('.hero-icon-Container').click(function () {
  var clickObject = $(this);
  var selectList = $('.Char-select-container');
  var copyObject = $('.hero-icon');

  //取得英雄名字class、武器分類class
  var heroClassSplit = clickObject.attr('class').split(' ');
  var $Chain_Container = $('.selection').parent();
  //加入class
  $Chain_Container.find('.char-img-container').addClass(heroClassSplit[1]);
  $Chain_Container.find('.weapon-img-container').addClass(heroClassSplit[2]);

  //選擇Team-container
  const $Team_container = clickObject.parents('.Team-container');
  const $chain_container = $Team_container.find('.header .chain-container');
  //變更連鎖圖片
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

  //Click_Icon(點擊物件class,選擇清單class,複製物件class)
  Click_Icon(clickObject, selectList, copyObject);
})

//移除英雄
$('.char-img-container').click(function () {
  const clickObject = $(this);
  const selectList = $('.Char-select-container');
  const removeObject = '.hero-icon';

  //判斷是否有英雄
  if (clickObject.find('.hero-icon').length > 0) {
    const $Chain_Container = clickObject.parent();
    const $char_img_container = $Chain_Container.find('.char-img-container');
    const $weapon_img_container = $Chain_Container.find('.weapon-img-container');
    const heroClass = $char_img_container.attr('class').split(' ');
    const weaponClass = $weapon_img_container.attr('class').split(' ');
    //清空武器
    $weapon_img_container.find('.EQ-icon').remove();
    //移除class
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
  //Click_Icon(點擊物件class,選擇清單class,複製物件class)
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
  //Click_Icon(點擊物件class,選擇清單class,複製物件class)
  Click_Icon(clickObject, selectList, copyObject);
})

//選擇的BOSS
$('.BOSS-icon-Container').click(function () {
  var clickObject = $(this);
  var selectList = $('.BOSS-select-container');
  var copyObject = $('.BOSS-icon');
  //取得BOSS名稱
  var boss_name = clickObject.find('.BOSS-icon .BOSS-img img').attr('alt')
  //Click_Icon(點擊物件class,選擇清單class,複製物件class)
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
  //抓取名稱欄位
  var bossTextObject = clickObject.parent().find('.BOSS-Name-container');
  bossTextObject.text('');
  //加入辨識欄位標籤
  bossTextObject.addClass('boss-Name');
})

//選擇的屬性
$('.attribute-icon-Container').click(function () {
  var clickObject = $(this);
  var selectList = $('.Attribute-select-container');
  var copyObject = $('.attribute-icon');
  //Click_Icon(點擊物件class,選擇清單class,複製物件class)
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
//新增按鈕
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
    //移除hidden標籤(英雄清單顯示被移除英雄)
    $('.' + heroClassSplit[3]).removeClass('hidden');
  })

  //將selectList移出
  click_Object.parent().find('.select_Item .selectList').each(function () {
    $('.Windows').append($(this));
  })
  //刪除編輯器
  click_Object.parent().remove();
}

//Click_Icon(點擊物件class,選擇清單class)
function Click_Edit(clickObject, selectList, removeObject) {
  $('.boss-Name').removeClass('boss-Name');
  //隱藏所有選擇視窗(BOSS、遺物、道具)
  $('.selectList').addClass('hidden');

  //判斷是否已被選擇
  if (clickObject.hasClass('selection')) {
    //console.log("Click_Edit:已選擇>取消");

    //取消前一個選取顯示
    $('.selection').removeClass('selection');
  } else {
    //console.log("Click_Edit:未選擇>選擇");

    //取消前一個選取顯示
    $('.selection').removeClass('selection');
    //確認選擇物件
    clickObject.addClass('selection');
    //清空選擇物件底下的元素
    clickObject.find(removeObject).remove();
    //顯示選擇視窗
    selectList.removeClass('hidden');
    //移動選擇視窗
    selectList.appendTo(clickObject.parents('.Team-container').find('.select_Item'));

  }
}

//Click_Icon(點擊物件class,選擇清單class,複製物件class)
function Click_Icon(clickObject, selectList, copyObject) {
  //隱藏視窗
  selectList.addClass('hidden');
  //查詢Class
  var iconClass = clickObject.find(copyObject);
  //console.log(iconClass);

  //const relicDiv = $(this).find('.relic-icon');
  //relicDiv.clone().appendTo($('.selection'));
  iconClass.clone().appendTo($('.selection'));

  //取消前一個選取顯示
  $('.selection').removeClass('selection');
}


var keepSrc;//保存src路徑
var keepAlt;//保存alt


//連鎖下拉選單
$(document).on('click', '.option', function () {
  var selectedDropdown = $(this).find('.dropdown img.selected');
  //點擊下拉選單選項
  if (selectedDropdown.length > 0) {
    console.log('a');
    keepSrc = selectedDropdown.attr('src');
    //var selectedImageSrc = selectedDropdown.attr('src');
    $(this).find('img:first').attr('src', keepSrc);
    //$(this).find('img:first').attr('src', Alt);
    $(this).find('.dropdown').attr('style', 'display:none');
  }
})

//移除連鎖小圖示
$(document).on('click', '.chain-Select-now', function () {
  //console.log($('.chain-Select-now').length);
  const $this_Top_Parent = $(this).parent().parent().parent();
  //連鎖icon數量>1
  if ($this_Top_Parent.find('.chain-icon-time').length > 1) {
    $(this).parent().parent().remove();
  }
})
//添加selected標籤
$(document).on('click', '.dropdown img', function () {
  $(this).siblings().removeClass('selected');
  $(this).addClass('selected');
})

//滑進效果
$(document).on("mouseenter", ".option", function () {
  $(this).find('.dropdown').attr('style', 'display:block');
  //儲存狀態
  keepSrc = $(this).find('.chain-Select-now').attr('src');
  keepAlt = $(this).find('.chain-Select-now').attr('alt');
  //變更為刪除圖示
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
  //新增連鎖段數
  const $chain_container = $(this).parent();
  const copyTo = $chain_container.parent();
  $chain_container.clone(true).appendTo(copyTo);

  const $herder = $(this).parents('.header');
  //全選連鎖段數
  //const $chain_containers = $herder.find('.chain-container');
  const $chain_containers = $('.chain-container');
  //重新調整z-index
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