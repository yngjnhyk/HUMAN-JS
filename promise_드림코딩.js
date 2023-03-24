// Promise 는 비동기 작업을 위한 자바스크립트 객체입니다.
// 진행순서(상태)는 pending(promise 작업중) -> fulfilled(완료) or rejected(실패) 로 진행됩니다.
// Producer vs Consumer 로 나눌 수 있습니다.

// 1. Producer
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (newtork, read files)
  console.log('doing something...');
  setTimeout(() => {
    // resolve('진혁');
    reject(new Error('no network'));
  }, 2000);
})

// 2. Consumer: then, catch, fianlly
promise
  .then((value) => {
    console.log(value);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally')
  })


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));


// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('chicken'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => egg`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => sunnyside`), 1000);
  });

  getHen()
    .then(getEgg)
    .then(cook)
    .then(console.log);
