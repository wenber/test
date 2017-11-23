const { spawn } = require('child_process');

const child = spawn('node', ['timer.js'], {
  detached: true,
  stdio: 'ignore'
});

// child.unref();
child.stdout.pipe(function (a) {
    console.log(a)
})