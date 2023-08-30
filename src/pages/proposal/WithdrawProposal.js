
import React from "react";
import { Col, Row, Card, Button, Form } from '@themesberg/react-bootstrap';
import { ProjectTrackerCounts} from "../../components/Widgets";
import { Routes } from "../../routes";
import { Link } from "react-router-dom";

const WithdrawProposal = () => {
  return (
    <>
      <Row className="mt-4 p-4">

        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} xl={12} md={12} className="d-block mb-4 mb-md-0">
                  <h1 className="h2 heading36">Withdraw Proposal</h1>
                  <p className="project-subheading">we will politely notify the client that you are not interested. The client will be able to view the reason you've withdraw your proposal.</p>
                </Col>
                {/* Submit from  */}
                <Form className="personal-tab-form">
                  <Col xs={12} xl={12} md={12} className="mb-2 mt-4">
                    <Row className="d-flex mt-3">
                        <h4 className="mb-0 project-count-heading heading20">Reason</h4>
                        <hr className="red-line"/>
                      <Col xs={12} sm={12} md={12} >
                      <fieldset className="schedule-option">
                          <Form.Check
                            type="radio"
                            defaultValue="by-mistake"
                            label="Applied by mistake"
                            name="exampleRadios"
                            id="by-mistake"
                            htmlFor="by-mistake"
                            />

                          <Form.Check
                            defaultChecked
                            type="radio"
                            defaultValue="rate-too-low"
                            label="Rate Too low"
                            name="exampleRadios"
                            id="rate-too-low"
                            htmlFor="rate-too-low"
                            />
                            <Form.Check
                            type="radio"
                            defaultValue="conffict-with-client"
                            label="Scheduling conffict with client"
                            name="exampleRadios"
                            id="conffict-with-client"
                            htmlFor="conffict-with-client"
                            />
                            <Form.Check
                            type="radio"
                            defaultValue="unresponsive-client"
                            label="Unresponsive client"
                            name="exampleRadios"
                            id="unresponsive-client"
                            htmlFor="unresponsive-client"
                            />
                            <Form.Check
                            type="radio"
                            defaultValue="inappropriate-client"
                            label="Inappropriate Clint behaviour"
                            name="exampleRadios"
                            id="inappropriate-client"
                            htmlFor="inappropriate-client"
                            />
                        </fieldset>
                      </Col>
                    </Row>
                    <Row className="d-flex mt-3">
                        <h4 className="mb-0 project-count-heading heading20">Message</h4>
                        <hr className="red-line  border-bottom"/>
                      <Col xs={12} sm={12} md={12} >
                        <h6 className="mb-0 heading18 font-15">Add an optional message.</h6>
                        <Form.Group className="mb-3">
                          <Form.Control as="textarea" rows="6" placeholder="Message..." />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row  className="d-flex mt-3">
                      <Col md={12}>
                        <Button type="submit" as={Link} to={Routes.ProposalDetail.path} className="m-1 proposal-submitBtn">Withdraw Proposal</Button>
                        <Button as={Link} to={Routes.ProposalDetail.path} className=" m-1 proposal-cancelBtn">Cancel</Button>
                      </Col>
                    </Row>
                  </Col>
                </Form>
              </Row>
            </Col>
            {/* Right side bar */}
            <Col xs={12} xl={4}>
              <Row>
                <Col xs={12} className="mb-4">
                  <Card border="light" className="shadow-sm">
                    <Card.Body>
                      <ProjectTrackerCounts />
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default WithdrawProposal;