
const asyncFunc = ( callback ) => {
  setTimeout(()=>{
    // ....
    callback('peanut butter');
  },1000)
} 
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

