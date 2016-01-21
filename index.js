module.exports = {
  subscribers: {},

  on: function (eventName, callback) {
    (this.subscribers[eventName] = this.subscribers[eventName] || []).push(
      callback
    );

    return this;
  },

  off: function (id) {
    for (var eventName in this.subscribers) {
      var eventSubscribers = this.subscribers[eventName];

      for (var i = 0; i < eventSubscribers.length; i++) {
        if (eventSubscribers[i] === id) {
          eventSubscribers.splice(i, 1);
        }
      }
    }
  },

  all: function(callback){
    return this.on('*', callback);
  },

  trigger: function (eventName, data, source) {
    var eventPrefix = eventName.split(':')[0];
    var eventSubscribers = (this.subscribers[eventName] || [])
      .concat(this.subscribers['*'] || [])
      .concat(this.subscribers[eventPrefix + ':*'] || []);

    for (var i = 0; i < eventSubscribers.length; i++) {
      eventSubscribers[i](eventName, data, source, eventSubscribers);
    }
  },
  // backward-compatibility alias for trigger
  send: function() {
    return this.trigger.apply(this, arguments);
  }
};
