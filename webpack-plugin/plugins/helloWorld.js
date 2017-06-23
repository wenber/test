function HelloWorldPlugin(options) {
    // 使用配置（options）设置插件实例
}

HelloWorldPlugin.prototype.apply = function(compiler) {
    compiler.plugin('after-emit', function(compilation, callback) {
        for (var filename in compilation.assets) {
            console.dir(compilation.fileDependencies)
        }
    });

    // compiler.plugin("compilation", function(compilation) {
    //     compilation.plugin("chunk-hash", function(chunk, chunkHash) {
    //         // var source = chunkIdSource(chunk) + chunk.modules.map(getModuleSource).sort(compareModules).reduce(concatenateSource, ''); // we provide an initialValue in case there is an empty module source. Ref: http://es5.github.io/#x15.4.4.21
    //         // var chunk_hash = md5(source);
    //         // chunkHash.digest = function () {
    //         //     return chunk_hash;
    //         // };
    //         console.log(chunkHash);
    //     });
    // });

    // compiler.plugin('emit', function(compilation, callback) {

    //     // 探索每个块（构建后的输出）:
    //     compilation.chunks.forEach(function(chunk) {
    //         // 探索块中的每个模块（构建时的输入）：
    //         // chunk.modules.forEach(function(module) {
    //         //     // 探索模块中包含的的每个源文件路径：
    //         //     module.fileDependencies.forEach(function(filepath) {
    //         //         // 现在我们已经知道了很多的源文件结构了……
    //         //     });
    //         // });

    //         // // 探索块生成的每个资源文件名
    //         // chunk.files.forEach(function(filename) {
    //         //     // 得到块生成的每个文件资源的源码
    //         //     var source = compilation.assets[filename].source();
    //         // });
    //         console.log(chunk.modules.length)
    //     });

    //     callback();
    // });
};

module.exports = HelloWorldPlugin;