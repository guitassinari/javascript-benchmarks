var Benchmark = require('benchmark');

 var Suite = new Benchmark.Suite;

 Suite.add('Empty Object + Assigns attributes', function(){
   var object = {};
   object.val1 = 'val1';
   object.val2 = null;
   object.val3 = 5;
   object.val4 = {title : 'new object'};
   object.val5 = ['1', '2', '3'];
   return object;
 })
 .add('Return Fullfilled Object', function(){
   return {
     val1 : 'val1',
     val2 : null,
     val3 : 5,
     val4 : {title : 'new object'},
     val5 : ['1', '2', '3']
   }
 })
 .add('Return Fullfilled Object Variable',function(){
   var object = {
     val1 : 'val1',
     val2 : null,
     val3 : 5,
     val4 : {title : 'new object'},
     val5 : ['1', '2', '3']
   };
   return object;
 })
 .on('complete', function(){
   this.forEach(function(suite){
    console.log(suite.toString() + '\n');
   })
 })
 .run();
