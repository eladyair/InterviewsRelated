console.log('///////////////////////   Bind - Call - Apply   ///////////////////////');
var obj1 = {
    x: 1,
    print: function() {
        console.log(this.x);
    }
};

var obj2 = {
    x: 5
};

//your code here - Specfic implementation of the bind function
Function.prototype.attach = function(obj) {
    this.print = obj1.print;
    this.x = obj.x;

    return () => this.print();
};

//end your code

var attched = obj1.print.attach(obj2);
attched(); // 5

///////////////////////   Call   ///////////////////////

var obj = {
    name: 'Elad'
};

function hello(age) {
    console.log('Hello ' + this.name + ' age: ' + age);
}

//your code here
Function.prototype.run = function(context) {
    var args = Array.from(arguments).slice(1);

    context.fn = this;
    var result = context.fn(...args);

    delete context.fn;

    return result;
};

//end your code

hello.run(obj, 42);

///////////////////////   Apply   ///////////////////////

var ob = {
    name: 'Elad'
};

function hello2(lastName, age) {
    console.log('Hello ' + this.name + ' ' + lastName + ' age: ' + age);
}

//your code here
Function.prototype.with = function(context) {
    var args = Array.from(arguments[1]);
    context.fn = this;

    var result = context.fn(...args);
    delete context.fn;

    return result;
};

//end your code

hello2.with(ob, ['Yair', 42]);
