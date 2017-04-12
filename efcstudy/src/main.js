/**
 * @file 项目全局主入口
 *
 * @author liuming07(liuming07@baidu.com)
 * @date 2015-4-3
 */

define(function (require) {

    var _ = require('underscore');
    var ajax = require('fc-ajax');

    // 配置默认系统配置，必须在start之前

    // 配置系统的er Action的定义配置
    require('er/controller').registerAction(
        _.flatten(require('./actionConf'))
    );

    require('fc-ajax/config').url = 'request.ajax';

    ajax.request('GET/basicInfo').then(
        function (response) {
            require('er').start();
        },
        function () {
        }
    )
});
