
import React from "react";
import { Col, Row, Card, Button, Table, Form } from '@themesberg/react-bootstrap';
import { Routes } from "../../routes";
import { Link } from "react-router-dom";

const Connection = () => {
  return (
    <>
      <Row className="mt-4 p-3">

        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={12} className="mb-4">
              <Row>
                <Col xs={12} xl={12} md={12} className="d-block mb-4 mb-md-0">
                  <h1 className="h2 heading36">Connects balance</h1>
                </Col>
                {/* Available Connects  */}
                <Col xs={12} xl={12} md={12} className="mb-2 mt-4">
                  <Card border="light" className="shadow-sm mb-4">
                    <Card.Body>
                      <Row>
                        <Col xs={12} sm={12} xl={12} >
                          <h6 className="job-like-title text-gry">Available Connects</h6>
                          <p className="project-count-heading">150</p>
                          <p className="detail-text text-black text-start">
                            Learn more about how to earn and use Connects.
                          </p>
                          <Button type="submit" as={Link} to={Routes.ProposalDetail.path} className="m-1 personal-tab-update">Buy Connects</Button>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                {/* Connects History */}
                <Col xs={12} xl={12} md={11} className="mb-2 mt-3 p-4">
                  <Row>
                    <Col xs={12} xl={9} md={9} className="d-block mb-4 mb-md-0">
                      <h6 className="job-like-title text-gry">Connects History</h6>
                    </Col>
                    <Col  xs={12} xl={3} md={3} className="d-block mb-4 mb-md-0">
                        <Form.Group id="Sort">
                            <Form.Select defaultValue="1" className="custome-select">
                                <option value="0">Sort</option>
                                <option value="1">Last 7 Days</option>
                                <option value="2">Last 15 Days</option>
                                <option value="3">Last 30 Days</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                  </Row>
                  <Row className="d-flex align-items-center mt-3 p-4">
                    <Table>
                      <thead className="thead-light">
                        <tr>
                          <th className="border-0 font-20-600">Date</th>
                          <th className="border-0 font-20-600">Action</th>
                          <th className="border-0 text-center font-20-600">Connects</th>
                        </tr>
                      </thead>
                      <tbody className="border-0">
                        <tr>
                          <td className="border-bottom border-light">
                            <h6 className="d-flex align-items-center withdrwa-subheading text-black font-inter">Jul 13, 2023</h6>
                          </td>
                          <td className="border-bottom border-light fw-bold">
                            <h6 className="mb-0 withdrwa-subheading text-black font-inter font-12">Applied For Job</h6>
                            <h6 className="mb-0 withdrwa-subheading text-black font-inter">Are you a WordPress developer?</h6>
                          </td>
                          <td className="border-bottom border-light text-center">
                            <h6 className="withdrwa-subheading text-black font-inter">-12</h6>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-bottom border-light">
                            <h6 className="d-flex align-items-center withdrwa-subheading text-black font-inter">Jul 13, 2023</h6>
                          </td>
                          <td className="border-bottom border-light fw-bold">
                            <h6 className="mb-0 withdrwa-subheading text-black font-inter font-12">Applied For Job</h6>
                            <h6 className="mb-0 withdrwa-subheading text-black font-inter">Are you a WordPress developer?</h6>
                          </td>
                          <td className="border-bottom border-light text-center">
                            <h6 className="withdrwa-subheading text-black font-inter">-12</h6>
                          </td>
                        </tr>
                        <tr>
                          <td className="border-bottom border-light">
                            <h6 className="d-flex align-items-center withdrwa-subheading text-black font-inter">Jul 13, 2023</h6>
                          </td>
                          <td className="border-bottom border-light fw-bold">
                            <h6 className="mb-0 withdrwa-subheading text-black font-inter font-12">Applied For Job</h6>
                            <h6 className="mb-0 withdrwa-subheading text-black font-inter">Are you a WordPress developer?</h6>
                          </td>
                          <td className="border-bottom border-light text-center">
                          <h6 className="withdrwa-subheading text-black font-inter">-12</h6>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Connection;