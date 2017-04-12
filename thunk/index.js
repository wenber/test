var thunk = function(fn) {
    return function() {
        var args = Array.prototype.slice.call(arguments);
        return function(callback) {
            args.push(callback);
            console.log(this);
            return fn.apply(this, args);
        }
    }
}

console.log(221)