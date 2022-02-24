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