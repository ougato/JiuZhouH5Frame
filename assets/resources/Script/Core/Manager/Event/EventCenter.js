/**
 * 事件处理中心
 * @type {Function}
 */
let DefEvent = require( "DefEvent" );
let EventManager = require( "EventManager" );

// 实例化对象
let instance = null;

let EventCenter = cc.Class({

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
                instance = new EventCenter();
            }
            return instance;
        },
    },

    /**
     * 构造
     */
    ctor() {

    },

    /**
     * 发送消息
     * @param msg
     */
    sendMsg( msg ) {
        let eventId = msg.getEventId();
        switch( eventId ) {
            case DefEvent.EVENT.VIEW:
                EventManager.getEventView().sendMsg( msg );
                break;
            case DefEvent.EVENT.NET:
                EventManager.getEventNet().sendMsg( msg );
                break;
            default:

                break;
        }
    },
});

module.exports = EventCenter;
