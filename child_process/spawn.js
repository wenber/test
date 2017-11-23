const { spawn } = require('child_process');
console.log(process.pid)
const child = spawn('wc');
console.log(process.pid)
process.stdin.pipe(child.stdin)

process.stdout.on('data', (data) => {
  console.log(`child stdout:\n${data}`);
});