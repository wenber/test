/**
 * @file entry的actionConf配置主文件 - Action配置
 *
 * @author liuming07(liuming07@baidu.com)
 * @date 2015-4-3
 */
define(function (require) {
    var confList = [
        require('./404/actionConf'),
        require('./500/actionConf'),
        require('./material/actionConf')
    ];
    return confList;
});