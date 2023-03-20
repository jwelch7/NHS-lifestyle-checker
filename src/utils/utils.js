import moment from "moment";

export const checkNameMatch = (obj, userObj) => {
  //this function checks the regex of the input user surname against the name stored in the database. it only checks on the name up to the comma. i.e "DOE, John" is only checked up to "DOE" as we are only asking the users to input their surname
  const regex = new RegExp(`\\b${userObj.name}\\b`, "i");
  const [, lastName] = obj.name.match(/(.*),\s*(.*)/);
  return regex.test(lastName);
};

export const checkDetails = (mockDB, userObj) => {
  //check all users in mockdb to see if any match the userObj exactly
  const matchingObj = mockDB.find(
    (obj) =>
      obj.nhsNumber === parseInt(userObj.nhsNumber) &&
      checkNameMatch(obj, userObj) &&
      obj.born === userObj.born
  );

  //if all matching but one is under 18 then tell them theyre too young, if not then return success
  if (matchingObj) {
    const age = calculateAge(matchingObj.born);
    if (age < 18) {
      return "You are not eligible for this service";
    } else {
      return "Success";
    }
  } else {
    return "Your details could not be found";
  }
};

export const calculateAge = (birthday) => {
  const dob = moment(birthday, "DD/MM/YYYY");
  const now = moment();
  return now.diff(dob, "years");
};
