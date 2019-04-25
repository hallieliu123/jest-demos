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
          `expected ${received} not to be divisible by ${ externalValue}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${received} to be divisible by ${ externalValue }`,
        pass: false,
      };
    }
  },
});

test('is divisible by external value', async () => {
  await expect(100).customAsyncMatcher();
  await expect(101).not.customAsyncMatcher();
});
