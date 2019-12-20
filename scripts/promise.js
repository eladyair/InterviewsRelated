class MyPromise {
    constructor(cb) {
        this.value = null;
        this.callback = null;
        cb(this.res.bind(this));
    }

    res(value) {
        this.value = value;
        this.callback(this.value);
    }

    myThen(cb) {
        this.callback = cb;
    }
}

var mp = new MyPromise(function(res) {
    setTimeout(() => {
        res(56);
    }, 2000);
});

mp.myThen(data => {
    console.log(data);
});
