import React, { useState, useReducer } from "react";

const initialState = [
  {
    firstName: "Suresh",
    lastName: "Bethanasamy",
    dob: "09-05-1990",
    imgPath:
      "https://i.picsum.photos/id/228/200/200.jpg?hmac=o6k6dSrgAeHp1V6rxIjRR2cwEeu4DUs9Z1-sLxrQ878",
  },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "ADDING":
      console.log("action", action);
      return [...state, { ...action.newEmployee }];

    default:
      return {
        ...state,
      };
  }
};

export default function EmployeeDetails() {
  const initialFieldValues = {
    firstName: "",
    lastName: "",
    dob: "",
    imgPath:""
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [fieldValue, setfieldValue] = useState({ ...initialFieldValues });
  const handleOnChange = ({ name, value }) => {
    setfieldValue({ ...fieldValue, [name]: value });
  };
  //   Handle the employee add operation
  const handleAdd = (e) => {
    e.preventDefault();
    const { firstName, lastName, dob,imgPath } = fieldValue;
    const newEmployee = { firstName, lastName, dob,imgPath };
    dispatch({ type: "ADDING", newEmployee });
    // Reset the form fields
    setfieldValue({ ...initialFieldValues });
  };
  const { firstName, lastName, dob,imgPath } = fieldValue;
  return (
    <div>
      <h3>Employee Details</h3>
      <form onSubmit={(e) => handleAdd(e)}>
        <div>
          <input
            type="text"
            placeholder="first name"
            name="firstName"
            value={firstName}
            onChange={(e) => handleOnChange(e.target)}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="last name"
            name="lastName"
            value={lastName}
            onChange={(e) => handleOnChange(e.target)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Date of birth"
            name="dob"
            value={dob}
            onChange={(e) => handleOnChange(e.target)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Image url"
            name="imgPath"
            value={imgPath}
            onChange={(e) => handleOnChange(e.target)}
          />
        </div>
        <input type="submit" value="Add" />
      </form>
      <div>
        <ul>
          {state.map((employee, index) => {
            return (
              <li key={index}>
                <div>
                  <p>Name: {employee.firstName}</p>
                  <p>Last: {employee.lastName}</p>
                  <p>DOB: {employee.dob}</p>
                  <p>
                    <img
                      src={employee.imgPath}
                      title="avatar"
                      alt="avatar alt"
                    />
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
