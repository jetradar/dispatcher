# dispatcher
extremely simple blazing-fast pure javascript publisher-subscriber

## Installation
`npm install @jetradar/dispatcher --save`

## Examples
```javascript
import { dispatcher } from '@jetradar/dispatcher';

dispatcher.on('beer', (eventName, data) => {
  console.log(data.isDraught);
…
}

dispatcher.send('beer', {
  isDraught: true
});

dispatcher.trigger('beer', {
  isDraught: false
});

// true
// false

```

## API Reference

`dispatcher.on(eventName, handler)` — subscribes handler to eventName

`dispatcher.trigger(eventName, payload)` or `dispatcher.send(eventName, payload)` — Fires `eventName` event to all

`dispatcher.all(handler)` or `dispatcher.on('*', handler)` — subscribes for all the events being fired

`dispatcher.off(eventName)` — removes eventName from events list
