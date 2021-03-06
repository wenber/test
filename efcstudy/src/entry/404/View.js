/**
 * @file 模块 `entry/404` - View定义
 *
 * @author liuming07(liuming07@baidu.com)
 * @date 2015-4-3
 */

define(function (require) {

    var EntryView = require('fc-view/mvc/EntryView');

    // 加载tpl
    require('etpl/tpl!./tpl.html');

    // 加载样式
    require('css!./style.less');

    /**
     * 模块 `entry/404` - View定义
     *
     * @class
     * @extends {er.View}
     */
    var overrides = {};

    /**
     * @property {string} template 所使用的模板，entry-404-loading就是加载时的模板，require它来自动使用
     */
    overrides.template = 'entry-404';

    /**
     * 渲染时额外的数据替换配置
     * key为完整路径，例如@sth.a，路径就是sth.a
     * value可以为方法，也可以为值
     * @type {?Object}
     */
    overrides.templateDataReplacer = null;

    /**
     * 配置UI属性
     */
    overrides.uiProperties = null;

    /**
     * 配置UI事件
     */
    overrides.uiEvents = null;

    /**
     * 界面渲染完成之后的事件处理，enterDocument已被占用
     */
    overrides.customDocument = function () {};

    // 使用get获取UI，使用getComponent获取component
    // 使用waitAlert和waitConfirm方法来进行交互，并且使用promise链式处理


    var View = require('eoo').create(EntryView, overrides);

    return View;
});
