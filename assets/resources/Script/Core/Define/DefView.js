/**
 * Author: oucheng(ougato@gmail.com)
 * Copyright (c) 2018-03
 */

/**
 * 间隔
 */
const SPAN = 100;

/**
 * 视图 层级
 */
const ZORDER = {
    BOTTOM: SPAN * 0,
    UI: SPAN * 1,
    TOP: SPAN * 2,
    POPUP: SPAN * 3,
    SYSTEM: SPAN * 4,
};

/**
 * 预制路径
 */
const PREFAB_PATH = "Prefab/";

/**
 * 场景路径
 */
const SCENE_PATH = "Scene/";

/**
 * 场景
 */
const SCENE = {
    Loading: "Loading",
    Login: "Login",
    Platform: "Platform",

    // 骰子游戏
    DiceLobby: "DiceLobby",
    DicePlay: "DicePlay",

    // 弹珠游戏

};

/**
 * PREFAB
 */
const PREFAB = {
    Loading: "Loading",
    Yellow: "Yellow",
    Demo: "Demo",
    Audio: "Audio",
    Event: "Event",
    View: "View",

    // 骰子游戏
    DiceShare: "Dice/DiceShare",
    DiceTips: "Dice/DiceTips",
    DiceSelectAge: "Dice/DiceSelectAge",
    DiceModeMelee : "Dice/DiceModeMelee",

};

module.exports = {
    SPAN: SPAN,
    ZORDER: ZORDER,
    PREFAB_PATH: PREFAB_PATH,
    SCENE_PATH: SCENE_PATH,
    SCENE: SCENE,
    PREFAB: PREFAB,
};