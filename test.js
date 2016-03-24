var bacon = require('baconjs').Bacon
var events = require("events");

var evt = new events.EventEmitter();
var a = bacon.fromEventTarget(evt, 'haha-').map(function(){return 'a ha~~~'})
var b = bacon.fromEventTarget(evt, 'haha')

var c = a.merge(b)

var d = c.filter(function(data){
  return  (data == 'good')
})

a.onValue(function(data){
  console.log('a: ', data)
})

b.onValue(function(data){
  console.log('b: ', data)
})

c.onValue(function(data){
  console.log('c: ', data)
})

d.onValue(function(data){
  console.log('d: ', data)
})

evt.emit('haha', 'hello')
evt.emit('haha', 'good')
evt.emit('haha-', 'helloworld')


