/* 
    This file is the entry point of your code! 🚀
    

*/
// We recommend you wrap your code in a try/catch block to catch Syntax and Reference errors and log them correctly
try {
  const a = 1;
  const b = 3;
  const test = () => {
    console.log('test'); // 📌 You can log strings
  };
  function test2() {
    console.log('test2'); // 📌 You can log strings
  }
  const array = [1, 2, 3];

  array.forEach(item => console.log(item)); // 📌 You can log inside functions
  console.info('hello there'); // ℹ️ You can log info strings
  console.log('general kenobi'); // 📌 You can log strings
  console.log(4); // 📌 You can log numbers
  console.log({ a, b }); // 📌 You can log object literals
  test();
  console.log([1, 2, 3]); // 📌 You can log arrays
  console.log({ a: 1, b: 2 }); // 📌 You can log object literals... again
  // Multi argument calls will be output to diferent lines but with the same trace!
  console.warn('test', test); // ⚠️ You can log warning strings
  console.log('test2', test2); // 📌 You can log strings... for good measure
  console.error('error'); // 💀 You can log error strings
  test2();
  console.log(new Error('dddd')); // 📌 You can log messages from Errors
  console.log(car); // Since car is not defined, this will throw a ReferenceError
} catch (error) {
  console.error(error); // But we can catch it and log it
}
