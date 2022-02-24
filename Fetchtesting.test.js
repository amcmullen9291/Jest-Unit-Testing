test('the data is peanut butter', () => {
    return fetchData().then(data => {
      expect(data).toBe('peanut butter');
    });
  });

  //this fails bc there was not fetch. but its testing the promise/fetched data;