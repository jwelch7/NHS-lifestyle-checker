import React, { useState } from "react";
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

//the matrix below represents the scores available per question for the different age groups
const scoreMatrix = [
  [1, 2, 3, 3],
  [2, 2, 2, 3],
  [1, 3, 2, 1],
];

const questionnaireResponse = {
  //the 2 responses a user gets at the end of the questionnaire
  lessThan4:
    "Thank you for answering our questions, we don't need to see you at this time. Keep up the good work!",
  moreThan3:
    "We think there are some simple things you could do to improve your quality of life, please phone to book an appointment",
};

const Success = () => {
  const [age, setAge] = useState("16 - 21");
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [score, setScore] = useState(null);

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleQuestion1 = (event) => {
    setQuestion1(event.target.checked);
  };

  const handleQuestion2 = (event) => {
    setQuestion2(event.target.checked);
  };

  const handleQuestion3 = (event) => {
    setQuestion3(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //the next line splits the age categories into indexed numbers which are then checked ahainst the scorematrix array
    //i.e. is someone is 32 theyre at index 1 if question2 was true (do you smoke) then the user would have a question2 score of 2.
    const ageIndex = ["16 - 21", "22 - 40", "41 - 65", "64+"].indexOf(age);
    const question1Score = question1 ? scoreMatrix[0][ageIndex] : 0;
    const question2Score = question2 ? scoreMatrix[1][ageIndex] : 0;
    //question 3 scoring system is inverted with false being a 0 so the ternary is inverted
    const question3Score = question3 ? 0 : scoreMatrix[2][ageIndex];
    const totalScore = question1Score + question2Score + question3Score;
    setScore(totalScore);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        Please tick all that apply
        <FormInput>
          <label>
            Age:
            <select value={age} onChange={handleAgeChange}>
              <option value="16 - 21">16 - 21</option>
              <option value="22 - 40">22 - 40</option>
              <option value="41 - 65">41 - 65</option>
              <option value="64+">64+</option>
            </select>
          </label>
        </FormInput>
        <br />
        <FormInput>
          <label>
            Do you drink on more than 2 days a week?
            <input
              type="checkbox"
              checked={question1}
              onChange={handleQuestion1}
            />
          </label>
        </FormInput>
        <br />
        <FormInput>
          <label>
            Do you smoke?
            <input
              type="checkbox"
              checked={question2}
              onChange={handleQuestion2}
            />
          </label>
        </FormInput>
        <br />
        <FormInput>
          <label>
            Do you exercise more than 1 hour per week?
            <input
              type="checkbox"
              checked={question3}
              onChange={handleQuestion3}
            />
          </label>
        </FormInput>
        <br />
        <button type="submit">Submit</button>
        <p>
          {/* the response below is displayed on submit and depends on their score */}
          {score !== null && (
            <p>
              {score <= 3
                ? questionnaireResponse.lessThan4
                : questionnaireResponse.moreThan3}
            </p>
          )}
        </p>
      </FormContainer>
    </form>
  );
};

export default Success;
