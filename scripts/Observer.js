console.log('///////////////////////   Observer   ///////////////////////');
class Observer {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers.filter(subscriber => subscriber !== observer);
    }

    notifyAll(data) {
        this.observers.forEach(o => o(data));
    }
}
