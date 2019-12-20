console.log('///////////////////////   Promisly   ///////////////////////');
function devide(a, b, cb) {
    var devideMe = a / b;
    return cb(devideMe);
}

function promisly(func) {
    // code
    return function(a, b) {
        return new Promise(function(res, rej) {
            return func(a, b, res);
        });
    };
}

promisly(devide)(100, 25).then(res => console.log('Result: ', res));
