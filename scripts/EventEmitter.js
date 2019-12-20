console.log('///////////////////////   Event Emitter   ///////////////////////');
class EventEmitter {
    constructor() {
        this.events = {};
        this.onceEvents = {};
    }

    _getEventsList(eventName) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        return this.events[eventName];
    }

    on(eventName, cb) {
        var eventsList = this._getEventsList(eventName);
        eventsList.push(cb);
    }

    once(eventName, cb) {
        if (!this.onceEvents[eventName]) {
            this.onceEvents[eventName] = cb;
        }
    }

    trigger(eventName) {
        var eventsList = this._getEventsList(eventName);
        eventsList.forEach(cb => {
            cb();
        });

        if (this.onceEvents[eventName]) {
            this.onceEvents[eventName]();
            this.onceEvents[eventName] = null;
        }
    }
}

var eventEmitter = new EventEmitter();

eventEmitter.on('click', () => console.log('Click 1'));
eventEmitter.on('click', () => console.log('Click 2'));
eventEmitter.on('click', () => console.log('Click 3'));
eventEmitter.once('elad', () => console.log('Elad'));
eventEmitter.once('click', () => console.log('Once Click'));

eventEmitter.trigger('click');
eventEmitter.trigger('elad');
eventEmitter.trigger('click');
eventEmitter.trigger('elad');
