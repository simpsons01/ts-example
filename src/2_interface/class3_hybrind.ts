interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}


// function getCounter(): Counter {
//   let counter = Object.assign(function (start: number) { return "" }, {
//     interval: 123, 
//     reset() {}
//   } ) ;
//   return counter;
// }