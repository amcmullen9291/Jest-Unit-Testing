
test('description', () => {
    return fetchData('put your tested URL here').then(data => {
      expect(data).toBe('value your looking for');  //may use consints also?
    });
  });

  //this fails bc there was not fetch. but its testing the promise/fetched data;