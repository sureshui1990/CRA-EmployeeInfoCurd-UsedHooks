import React, { useState, useReducer } from "react";
import {
  Form,
  Divider,
  Input,
  List,
  Image,
  Button,
  Card,
  Space,
  Badge,
} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Ribbon from "antd/lib/badge/Ribbon";

const initialState = [
  {
    id: "111",
    firstName: "Suresh",
    lastName: "Bethanasamy",
    dob: "09-05-1990",
    designation: "Software engineer",
    imgPath:
      "https://i.picsum.photos/id/228/200/200.jpg?hmac=o6k6dSrgAeHp1V6rxIjRR2cwEeu4DUs9Z1-sLxrQ878",
  },
];
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDING":
      return [...state, { ...action.newEmployee }];

    case "EDITING_START":
      state.forEach((employee) => {
        if (employee.id === action.id) {
          employee.isEdit = true;
        }
      });
      return [...state];
    case "EDITING_OFF":
      state.forEach((employee) => {
        employee.isEdit = false;
      });
      return [...state];

    case "UPDATING":
      const updateId = state.findIndex((emp) => emp.id === action.info.id);
      state.splice(updateId, 1, { ...action.info, isEdit: false });
      return [...state];

    case "REMOVING":
      const itemId = state.findIndex((emp) => emp.id === action.id);
      state.splice(itemId, 1);
      return [...state];

    default:
      return [...state];
  }
};

export default function EmployeeDetails() {
  const [form] = Form.useForm();
  const [EditEnable, setEditEnable] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  // Handle the employee add operation
  const handleCreate = () => {
    const id = new Date().getMilliseconds();
    dispatch({ type: "ADDING", newEmployee: { ...form.getFieldsValue(), id } });
    setEditEnable(false);
    form.resetFields();
  };
  // Handling edit flag in store
  const handleEdit = (employeeDetails) => {
    setEditEnable(true);
    dispatch({ type: "EDITING_START", id: employeeDetails.id });
    form.setFieldsValue(employeeDetails);
  };
  // Update the employee details
  const handleUpdate = () => {
    dispatch({ type: "UPDATING", info: form.getFieldsValue() });
    handleReset();
    setEditEnable(false);
  };
  // Handling selected employee details to remove
  const handleDelete = (id) => {
    const canDelete = window.confirm(
      "Do you really want to delete the employee details"
    );
    if (canDelete) {
      dispatch({ type: "REMOVING", id });
      handleReset();
      setEditEnable(false);
    }
  };
  // Handling the form fields rest
  const handleReset = () => {
    form.resetFields();
  };
  // Handle get back to create mode in update face
  const handleBack = () => {
    setEditEnable(false);
    handleReset();
    dispatch({ type: "EDITING_OFF" });
  };

  return (
    <div>
      <h3>Employee Info {EditEnable ? "Edit" : "Enroll"}</h3>
      <Form form={form}>
        <Form.Item name="firstName">
          <Input type="text" placeholder="First name" />
        </Form.Item>
        <Form.Item name="lastName">
          <Input type="text" placeholder="Last name" name="lastName" />
        </Form.Item>
        <Form.Item name="dob">
          <Input type="text" placeholder="Date of birth" name="dob" />
        </Form.Item>
        <Form.Item name="designation">
          <Input
            type="text"
            placeholder="Your designation"
            name="designation"
          />
        </Form.Item>
        <Form.Item name="imgPath">
          <Input type="text" placeholder="Image url" name="imgPath" />
        </Form.Item>
        <Form.Item>
          <Space>
            {EditEnable ? (
              <Button
                htmlType="button"
                type="primary"
                className="login-form-button"
                onClick={handleUpdate}
              >
                Update
              </Button>
            ) : (
              <Button
                htmlType="button"
                type="primary"
                onClick={handleCreate}
                className="login-form-button"
              >
                Create
              </Button>
            )}
            {!EditEnable && (
              <Button
                htmlType="button"
                type="primary"
                className="login-form-button"
                onClick={handleReset}
              >
                Reset
              </Button>
            )}
            {EditEnable && (
              <Button
                htmlType="button"
                type="primary"
                className="login-form-button"
                onClick={handleBack}
              >
                Back
              </Button>
            )}
          </Space>
        </Form.Item>
      </Form>
      <Divider />
      <div>
        <h3>Employee listing</h3>
        <List
          grid={{
            xs: 1,
            sm: 8,
            md: 4,
            lg: 4,
            xl: 3,
            xxl: 3,
          }}
          itemLayout="horizontal"
          dataSource={state}
          renderItem={(item) => (
            <List.Item>
              <Badge>
                {item.isEdit && (
                  <Ribbon
                    className="custom-ribbon-edit"
                    color="pink"
                    text="Edited"
                  ></Ribbon>
                )}
                <Card title={item.title}>
                  <p>
                    <b>First Name</b>: {item.firstName}
                  </p>
                  <p>
                    <b>Last Name</b>: {item.lastName}
                  </p>
                  <p>
                    <b>Date of birth</b>: {item.dob}
                  </p>

                  <p>
                    <b>Designation</b>: {item.designation}
                  </p>
                  <p>
                    <b>Last Name</b>: {item.lastName}
                  </p>
                  <div>
                    <Image width={250} height={250} src={item.imgPath} />
                  </div>
                  <Space>
                    <Button
                      disabled={item.isEdit}
                      type="primary"
                      onClick={() => handleEdit(item)}
                    >
                      <EditOutlined />
                    </Button>
                    <Button
                      type="primary"
                      onClick={() => handleDelete(item.id)}
                    >
                      <DeleteOutlined />
                    </Button>
                  </Space>
                </Card>
              </Badge>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
