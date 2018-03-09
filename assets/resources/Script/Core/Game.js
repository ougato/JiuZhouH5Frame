/**
 * 游戏类
 */

let DefView = require( "DefView" );

// 实例化对象
let instance = null;

let Game = cc.Class({

    /**
     * 静态
     */
    statics: {

        /**
         * 获取实例
         * @returns {Function}
         */
        getInstance() {
            if( instance === null ) {
                instance = new Game();
            }
            return instance;
        },
    },

    /**
     * 构造
     */
    ctor() {
        // 游戏ID
        this.m_nGameId = 0;
        // ...

    },

    /**
     * 初始化游戏需要的模块
     */
    init() {
        // 初始化SDK
        this.initSDK();
        // 初始化网络
        this.initNet();
        // 初始化资源
        this.initRes();

        // 运行游戏
        this.run();
    },

    /**
     * 初始化SDK
     */
    initSDK() {

    },

    /**
     * 初始化网络
     */
    initNet() {

    },

    /**
     * 初始化资源
     */
    initRes() {

    },

    /**
     * 运行
     */
    run() {
        G.ViewManager.openScene( DefView.SCENE.Login );
    },

});

module.exports = Game;