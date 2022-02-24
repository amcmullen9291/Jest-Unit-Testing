beforeEach(() => { //happens before each test;
    initializeCityDatabase(); // for example, call the method to fetch the data for testing;
  });
  
  afterEach(() => { //happens after each test is complete;
    clearCityDatabase(); 
  });

  //beforeAll() and afterAll() only happens once, before and/or after the file structure is loaded 

  beforeAll(() => {
    return initializeCityDatabase();
  });
  
  afterAll(() => {
    return clearCityDatabase();
  });

  //here is the order of testing

  // 1 - beforeAll
// 1 - beforeEach
// 1 - test
// 1 - afterEach 
// 2 - beforeAll (block scoped)
// 1 - beforeEach
// 2 - beforeEach (block scoped)
// 2 - test (block scoped)
// 2 - afterEach (block scoped)
// 1 - afterEach
// 2 - afterAll (block scoped)
// 1 - afterAll


describe('matching cities to foods', () => {
    // Applies only to tests in this describe block. Description is for you;
    beforeEach(() => {
      return initializeFoodDatabase();
    });

    //.... additional tests
})


test.only('this will be the only test that runs', () => {
    expect(true).toBe(false);
  });

  // the .only keyword isolates and runs a particular test. use if for fixing tests.;