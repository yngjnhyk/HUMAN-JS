let a = 2

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 5;
    console.log(a);
    resolve(a);  // 결괏값 a
  }, 0);
});


// .. 다른 코드
// .. 다른 코드
// .. 다른 코드
// .. 다른 코드
// .. 다른 코드
// .. 다른 코드
// .. 다른 코드
// .. 다른 코드
// .. 다른 코드

// 부르고 싶을 때
p.then((result) => {
  console.log('result', result);
});

