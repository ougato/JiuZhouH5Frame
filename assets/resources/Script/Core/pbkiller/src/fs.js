/**
 * Author: luyang(yanghr0209@gmail.com)
 * Copyright (c) 2018-03
 */

module.exports = {
    /**
     * 读取文件
     * @param {String} path 
     * @param {Function} cb 
     */
    readFile(path, cb) {
        let str = jsb.fileUtils.getStringFromFile(path);
        cb(null, str);  
    },

    /**
     * 
     * @param {String} path 
     */
    readFileSync(path) {
        return jsb.fileUtils.getStringFromFile(path);
    }
}