import React, { useState, useReducer } from "react";
import { Form, Input, Button } from "antd";

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
  const [form] = Form.useForm();
  const initialFieldValues = {
    firstName: "",
    lastName: "",
    dob: "",
    imgPath: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [fieldValue, setfieldValue] = useState({ ...initialFieldValues });
  const handleOnChange = ({ name, value }) => {
    setfieldValue({ ...fieldValue, [name]: value });
  };
  //   Handle the employee add operation
  const handleAdd = () => {
    form.validateFields().then((allValues) => {
      dispatch({ type: "ADDING", newEmployee: allValues });
      form.resetFields();
    });
    
    // e.preventDefault();
    // const { firstName, lastName, dob, imgPath } = fieldValue;
    // const newEmployee = { firstName, lastName, dob, imgPath };
    // dispatch({ type: "ADDING", newEmployee });
    // Reset the form fields
    // setfieldValue({ ...initialFieldValues });
  };
  // const { firstName, lastName, dob, imgPath } = fieldValue;
  return (
    <div>
      <h3>Employee Details</h3>
      <Form onFinish={(e) => handleAdd(e)} form={form}>
        <Form.Item name="firstName">
          <Input
            type="text"
            placeholder="first name"
            onChange={(e) => handleOnChange(e.target)}
          />
        </Form.Item>

        <Form.Item name="lastName">
          <Input
            type="text"
            placeholder="last name"
            name="lastName"
            onChange={(e) => handleOnChange(e.target)}
          />
        </Form.Item>
        <Form.Item name="dob">
          <Input
            type="text"
            placeholder="Date of birth"
            name="dob"
            onChange={(e) => handleOnChange(e.target)}
          />
        </Form.Item>
        <Form.Item name="imgPath">
          <Input
            type="text"
            placeholder="Image url"
            name="imgPath"
            onChange={(e) => handleOnChange(e.target)}
          />
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            type="primary"
            className="login-form-button"
          >
            Add
          </Button>
        </Form.Item>
      </Form>
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
