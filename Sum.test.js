const sum = require('./Sum'); //imports file info needed for testing

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);  //returns an "expectation object";
});


//keyword 'test'(description, funciton call { keyword 'expect'(example agrs)  matcher keyword 'tobe' (example solution)});

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

  //.toEqual is recursive => checks all attributes of an object.;

  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });