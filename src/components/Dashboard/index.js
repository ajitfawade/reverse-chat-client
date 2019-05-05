import React from 'react';
import { Container, Row, Col, Table } from 'reactstrap';
import './Dashboard.scss';

const dashboard = () => (
  <Container>
    <Row>
      <Col>
        <h3>Dashboard</h3>
      </Col>
    </Row>
    <div className="dashboard">
      <Table striped responsive bordered>
        <thead>
          <tr>
            <th>User</th>
            <th>Message Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ajit</td>
            <td>40</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </Container>
);
export default dashboard;
