var Benchmark = require('benchmark');

 var Suite = new Benchmark.Suite;

 Suite.add('++', function(){
   var c = 0;
   c++;
 })
 .add('Normal sum', function(){
   var c = 0;
   c = c + 1;
 })
 .on('complete', function(){
   this.forEach(function(suite){
    console.log(suite.toString() + '\n');
   })
 })
 .run();
