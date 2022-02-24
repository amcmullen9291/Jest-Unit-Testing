
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