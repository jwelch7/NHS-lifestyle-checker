import { checkDetails, checkNameMatch } from "../utils/utils";
const mockDB = [
  { nhsNumber: 111222333, name: "DOE, John", born: "1/14/2005" },
  { nhsNumber: 222333444, name: "SMITH, Alice", born: "25/03/1998" },
  { nhsNumber: 333444555, name: "CARTER, Bob", born: "20/05/1977" },
  { nhsNumber: 444555666, name: "BOND, Charles", born: "18/07/1953" },
  { nhsNumber: 555666777, name: "MAY, Megan", born: "14/11/2009" },
];

describe("checkNameMatch", () => {
  it("returns a bool", () => {
    const actualResult = checkNameMatch(
      { nhsNumber: 111222333, name: "DOE, John", born: "1/14/2005" },
      { nhsNumber: 111222333, name: "DOE", born: "1/14/2005" }
    );
    const expectedResult = true;
    expect(typeof actualResult).toBe("boolean");
  });
  it("returns true when passed correct details", () => {
    const actualResult = checkNameMatch(
      { nhsNumber: 111222333, name: "DOE, John", born: "1/14/2005" },
      { nhsNumber: 111222333, name: "doE", born: "1/14/2005" }
    );
    const expectedResult = true;
    expect(actualResult).toEqual(expectedResult);
  });
  it("returns false when passed names not matching", () => {
    const actualResult = checkNameMatch(
      { nhsNumber: 111222333, name: "DOE, John", born: "1/14/2005" },
      { nhsNumber: 111222333, name: "Smith", born: "1/14/2005" }
    );
    const expectedResult = false;
    expect(actualResult).toEqual(expectedResult);
  });
});

describe("checkDetails", () => {
  it("returns a string", () => {
    const actualResult = checkDetails(mockDB, {
      nhsNumber: 111222333,
      name: "DOE",
      born: "1/14/2005",
    });
    expect(typeof actualResult).toBe("string");
  });
  it("returns success when it matches a userObj and an object in the mockDB", () => {
    const actualResult = checkDetails(mockDB, {
      nhsNumber: 111222333,
      name: "DOE",
      born: "1/14/2005",
    });
    const expectedResult = "Success";
    expect(actualResult).toEqual(expectedResult);
  });
  it("returns You are not eligible for this services when it matches a userObj and an object in the mockDB but the user is under 18", () => {
    const actualResult = checkDetails(mockDB, {
      nhsNumber: 555666777,
      name: "MAY",
      born: "14/11/2009",
    });
    const expectedResult = "You are not eligible for this service";
    expect(actualResult).toEqual(expectedResult);
  });
  it("returns Your details could not be found in any other scenario", () => {
    const actualResult = checkDetails(mockDB, {
      nhsNumber: 555666779,
      name: "MAY",
      born: "14/11/2009",
    });
    const expectedResult = "Your details could not be found";
    expect(actualResult).toEqual(expectedResult);
    const actualResult2 = checkDetails(mockDB, {
      nhsNumber: 111222333,
      name: "DO",
      born: "1/14/2005",
    });
    const expectedResult2 = "Your details could not be found";
    expect(actualResult2).toEqual(expectedResult2);
  });
});
