const driver = require('../driver.js');


let logSpy = jest.spyOn(console, 'log').mockImplementation();

afterAll(() => {
  logSpy.mockRestore();
});


describe('should test vendor.js console log', () => {

  it('checks new order console.logs', () => {
    driver.;
    setTimeout(() => {
      expect(logSpy).toHaveBeenCalled()
    }, 5000)
  });

  it('checks delievered console.logs', () => {
    driver.inTransit();
    setTimeout(() => {
      expect(logSpy).toHaveBeenCalled()
    }, 4000)
  });

});
