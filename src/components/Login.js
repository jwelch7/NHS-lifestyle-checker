import { useState } from "react";
import { checkDetails } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormContainer = styled.div`
  border: 1px solid #1978c8;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Frutiger W01, Arial, Sans-serif;
  background-color: #f0f4f5;
`;

const FormInput = styled.div`
  display: contents;
`;

const ButtonContainer = styled.button`
  background-color: #007f3b;
  color: white;
  border-radius: 4px;
  font-weight: 600;
  box-shadow: 0 1px #00401e;
  width: 150px;
  margin: 20px;
  height: 60px;
  font-size: 16px;
`;

const Login = () => {
  //as I did not have the access key I created a mockDB to validate the users credentials against
  const mockDB = [
    { nhsNumber: 111222333, name: "DOE, John", born: "1/14/2005" },
    { nhsNumber: 111222333, name: "SMITH, Alice", born: "25/03/1998" },
    { nhsNumber: 333444555, name: "CARTER, Bob", born: "20/05/1977" },
    { nhsNumber: 444555666, name: "BOND, Charles", born: "18/07/1953" },
    { nhsNumber: 555666777, name: "MAY, Megan", born: "14/11/2009" },
  ];

  const [userDetails, setUserDetails] = useState({
    nhsNumber: "",
    name: "",
    born: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  //the below function takes a string in the format Sun Jul 22 2018 01:00:00 GMT+0100 (British Summer Time) and converts it to MM/DD/YYY
  function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  const handleChange = (e) => {
    //using the inbuilt date input stored the date value on the valueAsDate key rather than value
    if (e.target.name === "born") {
      setUserDetails({
        ...userDetails,
        born: formatDate(e.target.valueAsDate),
      });
    } else {
      setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = checkDetails(mockDB, userDetails);
    //if the user details match then you navigate to the second page
    if (result === "Success") {
      navigate("/success");
    } else {
      setErrorMessage(result);
    }
  };
  //I have included below the code I would have used if I could have got an api response back.
  //I have had to guess at the keys in the apiRes so used a logical naming convention

  // const apiRes = handleRequest(userDetails.nhsNumber);
  // if (apiRes === "Success") {
  //   navigate("/success");
  // } else {
  //   setErrorMessage(apiRes);
  // }

  //below, if the response json matches the userDetails object, then the age is calculated and either a success or you are not eligible message is given. All other outcomes give a "Your details could not be found" message

  // const handleRequest = (nhsNumber) => {
  //   checkPatientDetails(nhsNumber).then((res) => {
  //     if (res.statusCode === 404) {
  //       return "Your details could not be found";
  //     }
  //     if (res.data == userDetails) {
  //       if (calculateAge(res.data.nhsNumber > 17)) {
  //         return "Success";
  //       } else {
  //         return "You are not eligible for this service";
  //       }
  //     } else {
  //       return "Your details could not be found";
  //     }

  //   });
  // };
  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <FormInput>
          <label>NHS Number</label>
          <div>
            {/* type=number ensures only numbers are input*/}
            <input
              type="number"
              name="nhsNumber"
              value={userDetails.nhsNumber}
              onChange={handleChange}
            />
          </div>
        </FormInput>
        <FormInput>
          <label>Surname</label>
          <div>
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
            />
          </div>
        </FormInput>
        <FormInput>
          {/* i used a type=date input here so that users cannot input the dob in the incorrect format*/}

          <label>Date of Birth</label>
          <div>
            <input
              type="date"
              id="start"
              name="born"
              value="2000-01-01"
              min="1900-01-01"
              max="2023-03-20"
              onChange={handleChange}
            ></input>
          </div>
        </FormInput>

        <ButtonContainer type="submit">Continue</ButtonContainer>
        {errorMessage && <p>{errorMessage}</p>}
      </FormContainer>
    </form>
  );
};

export default Login;
