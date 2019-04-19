// const sum = require('./sum');
// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });


  // test('object assignment', () => {
  //   const data = {one: 1};
  //   data['two'] = 2;
  //   expect(data).toEqual({one: 1, two: 2});
  // });


  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

// custom matchers / async
const asyncFunc = ( callback ) => {
  setTimeout(()=>{
    // ....
    callback('peanut butter');
  },1000)
} 

expect.extend({
  async customAsyncMatcher(received) {
    const externalValue = await asyncFunc();
    const pass = received % externalValue == 0;
    if (pass) {
      return {
        message: () =>
          `expected ${received} not to be divisible by ${externalValue}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be divisible by ${externalValue}`,
        pass: false,
      };
    }
  },
});

// test('is divisible by external value', async () => {
//   await expect(100).customAsyncMatcher();
//   await expect(101).not.customAsyncMatcher();
// });


// callback
test('callback the data is peanut butter', done => {
  function callback(data) {
    expect(data).toBe('peanut butter');
    done();
  }
  asyncFunc(callback);
});

// promise
const fetchData = () => {
  return new Promise((res,rej)=>{
      setTimeout(()=>{
        res('peanut butter')
      },1000)
  })
}
test('promise the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

// resolves / rejects
test('resolves the data is peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
});

// async / await
test('async/await the data is peanut butter', async () => {
  expect.assertions(1);
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});










