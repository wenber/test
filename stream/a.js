var ToReadable  = require('./readable');

const iterable = function *(limit) {
  while (limit--) {
    yield Math.random()
  }
}(10)

const readable = new ToReadable(iterable)

// 监听`data`事件，一次获取一个数据
readable.on('data', data => process.stdout.write(data))

// 所有数据均已读完
readable.on('end', () => process.stdout.write('DONE\n'))