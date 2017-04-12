process.on('message', function (e) {
    console.log('child get message: ' + e);
});

process.send('sfasdf');