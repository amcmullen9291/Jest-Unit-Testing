
test('description', () => {
    return fetchData('put your tested URL here').then(data => {
      expect(data).toBe('value your looking for');  //may use consints also?
    });
  });

  //this fails bc there was not fetch. but its testing the promise/fetched data;


  //the following is to make sure a fetch is not fullfilled;
  test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchData().catch(e => expect(e).toMatch('error'));
  });


  //the resolve/rejects keywords seem better? they throw a net regardless of content?;
  test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
  });

  test('the fetch fails with an error', () => {
    return expect(fetchData()).rejects.toMatch('error');
  });


  test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  });
  
  test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await fetchData();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });