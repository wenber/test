function twice(x) {
    return x + x;
}
var a = 'hello';
var b = 1234;

for (var i = 0; i < 8000; i++) {
    twice(i !== 8000 ? a : b)
}