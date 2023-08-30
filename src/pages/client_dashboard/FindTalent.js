
import React from "react";
import { Col, Row, Card, Form, InputGroup, Button } from '@themesberg/react-bootstrap';

import { FindTalentWidget, JobPagination } from "../../components/Widgets";

import Select from 'react-select';
const options = [
    { value: 'development', label: 'Web Develoment' },
    { value: 'designing', label: 'Designing' },
    { value: 'java', label: 'Java' },
    { value: 'block-chain', label: 'Block Chain' }
  ]

const FindTalent = () => {
  return (
    <>
      {/* <Row> */}
        <Col xs={12} xl={12} className="mb-4 mt-1">
          <Row>
            <Col xs={12} xl={4}>
              <Row>
                <Col xs={12} className="mb-4">
                  <Card className="no-border p-1">
                    <Card.Body>
                        <h2 className="filter-title">Filters</h2>
                        <Col xs={12} xl={12} md={12} sm={12}>
                            <Form>
                                {/* category selection  */}
                                <Form.Group className="mb-3">
                                    <Form.Label className="get-paid-heading font-inter">Category</Form.Label>
                                    <InputGroup className="input-group-merge">
                                        <InputGroup.Text className=" project-count-subheading border-40">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                                <path d="M1 12.5H4.5C5.60457 12.5 6.5 13.3954 6.5 14.5V18" stroke="#495057" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M12.5 18V14.5C12.5 13.3954 13.3954 12.5 14.5 12.5H18" stroke="#495057" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M18 6.5H14.5C13.3954 6.5 12.5 5.60457 12.5 4.5V1" stroke="#495057" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M6.5 1V4.5C6.5 5.60457 5.60457 6.5 4.5 6.5H1" stroke="#495057" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </InputGroup.Text>
                                        {/* <Form.Control type="text" placeholder="Developers, 1 Week, 2500$" className=" project-count-subheading border-40" /> */}
                                        <Select
                                            defaultValue={[0]}
                                            placeholder="Web Development, Java"
                                            isMulti
                                            name="colors"
                                            options={options}
                                            className="basic-multi-select form-control project-count-subheading border-40 input-border-40-focus"
                                            // classNamePrefix="select"
                                        />
                                    </InputGroup>
                                </Form.Group>
                                {/* Bidders */}
                                <Form.Group className="mb-3">
                                    <Form.Label className="get-paid-heading font-inter">Talent From</Form.Label>
                                    <InputGroup className="input-group-merge">
                                        <InputGroup.Text className=" project-count-subheading border-40">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <g clip-path="url(#clip0_557_1177)">
                                                <path d="M6.33301 15.0003C6.33301 14.1163 6.6842 13.2684 7.30932 12.6433C7.93444 12.0182 8.78229 11.667 9.66634 11.667H16.333C17.2171 11.667 18.0649 12.0182 18.69 12.6433C19.3151 13.2684 19.6663 14.1163 19.6663 15.0003C19.6663 15.4424 19.4907 15.8663 19.1782 16.1788C18.8656 16.4914 18.4417 16.667 17.9997 16.667H7.99967C7.55765 16.667 7.13372 16.4914 6.82116 16.1788C6.5086 15.8663 6.33301 15.4424 6.33301 15.0003Z" stroke="#495057" stroke-opacity="0.6" stroke-width="2" stroke-linejoin="round"/>
                                                <path d="M13 8.3335C14.3807 8.3335 15.5 7.21421 15.5 5.8335C15.5 4.45278 14.3807 3.3335 13 3.3335C11.6193 3.3335 10.5 4.45278 10.5 5.8335C10.5 7.21421 11.6193 8.3335 13 8.3335Z" stroke="#495057" stroke-opacity="0.6" stroke-width="2"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_557_1177">
                                                <rect width="20" height="20" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        </InputGroup.Text>
                                        <Form.Control type="text" placeholder="United States" className=" project-count-subheading border-40 input-border-40-focus"  style={{background: "#F3F6F9"}}/>
                                    </InputGroup>
                                </Form.Group>
                                <Col xl={12} md={12} xs={12}>
                                    <Button type="submit" className="w-100 m-1 proposal-submitBtn">Search</Button>
                                </Col>
                            </Form>
                        </Col>
                        <Col xs={12} xl={12} md={12} sm={12}>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="get-paid-heading font-inter">Popular filters</Form.Label>
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="Budget Project" id="budget_project" htmlFor="Budget Project" />
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="Expertise Required" id="expertise_required" htmlFor="Expertise Required" />
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="Find BlockChain based Freelance Projects" id="blockChain_projects" htmlFor="Find BlockChain based Freelance Projects" />
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="Blockchain based Platform" id="blockchain_platform" htmlFor="Blockchain based Platform" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xs={12} xl={12} md={12} sm={12}>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="get-paid-heading font-inter">Budget Range</Form.Label>
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="Less than $50" id="50" htmlFor="Less than $50" />
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="$50 to $100" id="50_to_100" htmlFor="$50 to $100" />
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="$100 to $150" id="100_to_150" htmlFor="$100 to $150" />
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="$150 and more" id="150" htmlFor="$150 and more" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xs={12} xl={12} md={12} sm={12}>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="get-paid-heading font-inter">Client rating</Form.Label>
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="Any" id="any" htmlFor="Any" />
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="Excellent" id="excellent" htmlFor="Excellent" />
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="Very good" id="very_good" htmlFor="Very good" />
                                    <Form.Check className="project-count-subheading text-black check-lable-w-400" label="Good" id="good" htmlFor="Good" />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col xs={12} xl={12} md={12} sm={12}>
                            <Form>
                                    <Form.Label className="get-paid-heading font-inter">Project Level</Form.Label>
                                <Form.Group className="mb-3">
                                    <Button variant="light" className=" tech-btn font-12 bg-white">1 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                            <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#696582" fill-opacity="0.44"/>
                                        </svg>
                                    </Button>
                                    <Button variant="light" className=" tech-btn font-12 bg-white">2 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                            <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#696582" fill-opacity="0.44"/>
                                        </svg>
                                    </Button>
                                    <Button variant="light" className=" tech-btn font-12 bg-white">3 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                            <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#696582" fill-opacity="0.44"/>
                                        </svg>
                                    </Button>
                                    <Button variant="light" className=" tech-btn font-12 bg-white">4 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                            <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#696582" fill-opacity="0.44"/>
                                        </svg>
                                    </Button>
                                    <Button variant="light" className=" tech-btn font-12 bg-white">5 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                                            <path d="M7.04894 0.92705C7.3483 0.00573921 8.6517 0.00573969 8.95106 0.92705L10.0206 4.21885C10.1545 4.63087 10.5385 4.90983 10.9717 4.90983H14.4329C15.4016 4.90983 15.8044 6.14945 15.0207 6.71885L12.2205 8.75329C11.87 9.00793 11.7234 9.4593 11.8572 9.87132L12.9268 13.1631C13.2261 14.0844 12.1717 14.8506 11.388 14.2812L8.58778 12.2467C8.2373 11.9921 7.7627 11.9921 7.41221 12.2467L4.61204 14.2812C3.82833 14.8506 2.77385 14.0844 3.0732 13.1631L4.14277 9.87132C4.27665 9.4593 4.12999 9.00793 3.7795 8.75329L0.979333 6.71885C0.195619 6.14945 0.598395 4.90983 1.56712 4.90983H5.02832C5.46154 4.90983 5.8455 4.63087 5.97937 4.21885L7.04894 0.92705Z" fill="#696582" fill-opacity="0.44"/>
                                        </svg>
                                    </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col xs={12} xl={8} className="mb-4 mt-1">
              <Row className="m-3">
                <Col xs={12} xl={9} md={9} className="d-block mb-4 mb-md-0">
                    <h6 className="get-paid-heading font-inter">140 search result for</h6>
                    <h1 className="h2 job-like-title">Talent In United States</h1>
                    <p className="personal-tab-subheading">Find Talent Working In Your Country</p>
                </Col>
                <Col  xs={12} xl={3} md={3} className="d-block mb-4 mb-md-0">
                    <Form.Group id="Sort">
                        <Form.Select defaultValue="0" className="custome-select">
                            <option value="0">Sort By</option>
                            <option value="1">Last 7 Days</option>
                            <option value="2">Last 15 Days</option>
                            <option value="3">Last 30 Days</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col xs={12} className="mb-4 mt-2">
                  <FindTalentWidget />
                </Col>
                <Col xs={12} className="mb-4">
                  <FindTalentWidget />
                </Col>
                <Col xs={12} className="mb-4">
                  <FindTalentWidget />
                </Col>
                <Col xs={12} className="mb-4">
                  <FindTalentWidget />
                </Col>
                <Col xs={12} className="mb-4">
                  <FindTalentWidget />
                </Col>
                <Col xs={12} className="mb-4">
                  <JobPagination />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      {/* </Row> */}
    </>
  );
};

export default FindTalent;