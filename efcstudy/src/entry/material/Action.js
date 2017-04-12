/**
 * @file 模块 `entry/material` - Action定义
 *
 * @author liuming07(liuming07@baidu.com)
 * @date 2015-4-3
 */

define(function (require) {

    var EntryAction = require('fc-view/mvc/EntryAction');

    /**
     * 模块 `entry/material` - Action定义
     *
     * @class
     * @extends {fc-view.EntryAction}
     */
    var overrides = {};

    overrides.modelType = require('./Model');
    overrides.viewType = require('./View');

    /**
     * 初始化行为交互
     */
    overrides.initBehavior = function () {

    };

    var Action = require('eoo').create(EntryAction, overrides);

    return Action;
});
