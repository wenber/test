/**
 * @file 全局actionConf配置主文件 - Action配置
 *
 * @author liuming07(liuming07@baidu.com)
 * @date 2015-4-3
 */
define(function (require) {
    var confList = [
        require('./module/actionConf'),
        require('./entry/actionConf')
    ];
    return confList;
});