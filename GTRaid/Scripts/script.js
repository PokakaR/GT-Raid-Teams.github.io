<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>守望傳說組隊編輯器</title>
  <!-- 引入外部CSS檔案 -->
  <link rel="stylesheet" href="CSS\style.css">
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
</head>

<body style="background-color: rgb(255, 255, 255);">
  <h1>編輯器</h1>

  <div class="Windows">
    <div class="newTeamButton">
      <button id="newTeam">新增</button>
    </div>

    <!-- 討伐編輯 -->
    <div class="Team">
      <div class="Team-container">
        <div class="removeTeamButton">
          <button class="removeTeam">X</button>
        </div>
        <div class="All">
          <dvi class="edit_Team">
            <div class="BOSS-container">
              <div class="BOSS-img-container relative radiu-9">
                <img src="image/Background/bg_BOSS.png" class="bg-BOSS z-0 absolute center">
              </div>
              <div class="Attr-img-container relative radiu-4">
                <img src="image/Background/attrbute_none.png" class="z-0 absolute center">
              </div>
              <div class="BOSS-Name-container relative">名字</div>
              <!--
              <div class="BOSS-info-container">
                <div class="Attr-img-container relative">
                  <img src="image/Background/attrbute_none.png" class="z-0 center">
                </div>
                <div class="BOSS-Name-container"></div>
              </div>
              -->
            </div>
            <div class="Relic-container">
              <div class="Relic-img-container relative radiu-4">
                <img src="image/Background/bg_Relic.png" class="z-0 absolute">
              </div>
              <div class="Accessory-img-container relative radiu-4">
                <img src="image/Background/bg_Accessory.png" class="z-0 absolute">
              </div>
            </div>
            <div class="Char-container chain-Select-1" data-option="hero1">
              <div class="char-img-container radiu-7 relative">
                <img src="image/Background/blue_tile.png" class="z-0 absolute">
              </div>
              <div class="weapon-img-container relative radiu-4">
                <img src="image/Background/bg_Weapon.png" class=" z-0 absolute">
              </div>
              <div class="weapon-img-container relative radiu-4">
                <img src="image/Background/bg_Weapon.png" class=" z-0 absolute">
              </div>
            </div>
            <div class="Char-container chain-Select-2" data-option="hero2">
              <div class="char-img-container radiu-7 relative">
                <img src="image/Background/blue_tile.png" class="z-0 absolute">
              </div>
              <div class="weapon-img-container relative radiu-4">
                <img src="image/Background/bg_Weapon.png" class=" z-0 absolute">
              </div>
              <div class="weapon-img-container relative radiu-4">
                <img src="image/Background/bg_Weapon.png" class=" z-0 absolute">
              </div>
            </div>
            <div class="Char-container chain-Select-3" data-option="hero3">
              <div class="char-img-container radiu-7 relative">
                <img src="image/Background/blue_tile.png" class="z-0 absolute">
              </div>
              <div class="weapon-img-container relative radiu-4">
                <img src="image/Background/bg_Weapon.png" class=" z-0 absolute">
              </div>
              <div class="weapon-img-container relative radiu-4">
                <img src="image/Background/bg_Weapon.png" class=" z-0 absolute">
              </div>
            </div>
            <div class="Char-container chain-Select-4" data-option="hero4">
              <div class="char-img-container radiu-7 relative">
                <img src="image/Background/blue_tile.png" class="z-0 absolute">
              </div>
              <div class="weapon-img-container relative radiu-4">
                <img src="image/Background/bg_Weapon.png" class=" z-0 absolute">
              </div>
              <div class="weapon-img-container relative radiu-4">
                <img src="image/Background/bg_Weapon.png" class=" z-0 absolute">
              </div>
            </div>
          </dvi>
          <dvi class="chain-Order-container">
            <div class="header">
              <div class="chain-container">
                <button class="add-chain-time">+</button>
                <button class="del-chain-time">-</button>
                <div class="chain-icon-time-conatiner">
                  <div class="chain-icon-time chain-select-1">
                    <div class="option" data-option="1">
                      <img src="image/character_icon/dark/Arabelle.png" alt="選項1" class="chain-Select-now">
                      <div class="dropdown">
                        <img src="image/character_icon/dark/Arabelle.png" alt="選項1下拉1" class="chain-Select-1"
                          data-option="hero1">
                        <img src="image/character_icon/dark/Beth.png" alt="選項1下拉2" class="chain-Select-2"
                          data-option="hero2">
                        <img src="image/character_icon/dark/Claude.png" alt="選項1下拉3" class="chain-Select-3"
                          data-option="hero3">
                        <img src="image/character_icon/dark/CorpsCommander.png" alt="選項1下拉4" class="chain-Select-4"
                          data-option="hero4">
                      </div>
                    </div>
                    <input type="text" placeholder="秒">
                  </div>
                  <div class="chain-icon-time chain-select-1">
                    <div class="option" data-option="1">
                      <img src="image/character_icon/dark/Arabelle.png" alt="選項1" class="chain-Select-now">
                      <div class="dropdown">
                        <img src="image/character_icon/dark/Arabelle.png" alt="選項1下拉1" class="chain-Select-1">
                        <img src="image/character_icon/dark/Beth.png" alt="選項1下拉2" class="chain-Select-2">
                        <img src="image/character_icon/dark/Claude.png" alt="選項1下拉3" class="chain-Select-3">
                        <img src="image/character_icon/dark/CorpsCommander.png" alt="選項1下拉4" class="chain-Select-4">
                      </div>
                    </div>
                    <input type="text" placeholder="秒">
                  </div>
                  <div class="chain-icon-time chain-select-1">
                    <div class="option" data-option="1">
                      <img src="image/character_icon/dark/Arabelle.png" alt="選項1" class="chain-Select-now">
                      <div class="dropdown">
                        <img src="image/character_icon/dark/Arabelle.png" alt="選項1下拉1" class="chain-Select-1">
                        <img src="image/character_icon/dark/Beth.png" alt="選項1下拉2" class="chain-Select-2">
                        <img src="image/character_icon/dark/Claude.png" alt="選項1下拉3" class="chain-Select-3">
                        <img src="image/character_icon/dark/CorpsCommander.png" alt="選項1下拉4" class="chain-Select-4">
                      </div>
                    </div>
                    <input type="text" placeholder="秒">
                  </div>
                  <div class="chain-icon-time chain-select-1">
                    <div class="option" data-option="1">
                      <img src="image/character_icon/dark/Arabelle.png" alt="選項1" class="chain-Select-now">
                      <div class="dropdown">
                        <img src="image/character_icon/dark/Arabelle.png" alt="選項1下拉1" class="chain-Select-1">
                        <img src="image/character_icon/dark/Beth.png" alt="選項1下拉2" class="chain-Select-2">
                        <img src="image/character_icon/dark/Claude.png" alt="選項1下拉3" class="chain-Select-3">
                        <img src="image/character_icon/dark/CorpsCommander.png" alt="選項1下拉4" class="chain-Select-4">
                      </div>
                    </div>
                    <input type="text" placeholder="秒">
                  </div>
                </div>
                <button class="add-chain-icon">+</button>
              </div>
            </div>
          </dvi>
          <dvi class="select_Item"></dvi>
        </div>

      </div>
    </div>
    <!-- BOSS選擇 -->
    <div class="BOSS-select-container selectList hidden">
      <div class="BOSS-title">
        <img src="image/Background/bg_BOSS.png" style="width: 40px; height: 40px;"></img>
      </div>
      <div class="BOSS-list"></div>
    </div>
    <!-- 選擇屬性 -->
    <div class="Attribute-select-container selectList hidden">
      <div class="Attribute-title">屬性</div>
      <div class="Attribute-list"></div>
    </div>
    <!-- 選擇飾品 -->
    <div class="Accessory-select-container selectList hidden">
      <div class="Accessory-title">飾品</div>
      <div class="Accessory-list"></div>
    </div>

    <!-- 選擇遺物 -->
    <div class="Relic-select-container selectList hidden">
      <div class="Relic-title">遺物</div>
      <div class="Relic-list"></div>
    </div>

    <!-- 選擇武器 -->
    <div class="EQ-select-container selectList hidden">
      <!-- 專武 -->
      <div class="ex-Weapon">
        <div class="EQ-title">專屬武器</div>
        <div class="EQ-container ex-Weapon-container"></div>
      </div>
      <!-- 打工武器 -->
      <div class="basic-Weapon">
        <div class="EQ-title">打工武器</div>
        <div class="EQ-container base-Weapon-container"></div>
      </div>
    </div>

    <!-- 選擇英雄 -->
    <div class="Char-select-container selectList hidden">
      <!-- 切六列屬性 -->
      <div class="att-1">
        <!-- 屬性圖片 -->
        <div class="left">
          <div class="bg-icon-normal">
            <img src="image/Attribute/ic_attribute_normal.png">
          </div>
        </div>
        <!-- 英雄圖片 -->
        <div class="right" id="normal-hero"></div>
      </div>

      <div class="att-1">
        <div class="left">
          <div class="bg-icon">
            <img src="image/Attribute/ic_attribute_water.png">
          </div>
        </div>
        <div class="right" id="water-hero"></div>
      </div>
      <div class="att-1">
        <div class="left">
          <div class="bg-icon">
            <img src="image/Attribute/ic_attribute_fire.png">
          </div>
        </div>
        <div class="right" id="fire-hero"></div>
      </div>
      <div class="att-1">
        <div class="left">
          <div class="bg-icon">
            <img src="image/Attribute/ic_attribute_earth.png">
          </div>
        </div>
        <div class="right" id="earth-hero"></div>
      </div>
      <div class="att-1">
        <div class="left">
          <div class="bg-icon">
            <img src="image/Attribute/ic_attribute_light.png">
          </div>
        </div>
        <div class="right" id="light-hero"></div>
      </div>
      <div class="att-1">
        <div class="left">
          <div class="bg-icon">
            <img src="image/Attribute/ic_attribute_dark.png">
          </div>
        </div>
        <div class="right" id="dark-hero"> </div>
      </div>
    </div>
  </div>

  <!-- 引入外部script檔案 -->
  <script src="Scripts\script.js"></script>
</body>

</html>
