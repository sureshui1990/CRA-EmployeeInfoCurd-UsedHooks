import React from "react";
import { Row, Col, Layout } from "antd";
import EmployeeDetails from "./EmployeeDetailsCrud";
import "./App.css";

function App() {
  const { Header, Footer, Content } = Layout;
  return (
    <div className="app">
      <Header>
        <h2>Header app</h2>
      </Header>
      <Content>
        <Row>
          <Col span="16" push="4">
            <EmployeeDetails />
          </Col>
        </Row>
      </Content>
      <Footer>
        <p>Copyrights@Test</p>
      </Footer>
    </div>
  );
}

export default App;
