function async(fn, callback) {
    // Code execution path breaks here.
    setTimeout(function ()　{
        callback(fn());
    }, 0);
}

try {
    async(null, function (data) {
        // Do something.
    });
} catch (err) {
    console.log('Error: %s', err.message);
}
