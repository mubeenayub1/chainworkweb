
import React, {useEffect, useState} from "react";
import { Col, Row, Card, Image, Button, Badge } from '@themesberg/react-bootstrap';
import { ProjectTrackerCounts, StarReviewComponent } from "../../components/Widgets";
import enFlag from "../../assets/img/flags/en.png";
import { Routes } from "../../routes";
import { Link, useHistory } from "react-router-dom";

const ProposalDetail = () => {
  const history = useHistory();
  // let proposal = JSON.parse(localStorage.getItem('proposal'));
  // const user = JSON.parse(localStorage.getItem('user'));

  const [proposalData, setProposal] = useState([])
  const [jobData, setJob] = useState([])
  const [jobSkill, setSkill] = useState([])
  const regex = /(<([^>]+)>)/ig;
  const removeTags =(text)=>{
    if(text !== undefined && text !== ''){
      return text.replace(regex, '');
    }
  } 
  
  useEffect(() => {
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    
    fetch(`http://16.171.150.73/api/v1/getSingleProposal/64ede797037f7bf0660b2dac`, requestOptions)
      .then(response => response.text())
      .then((result) =>{
        let data = JSON.parse(result);
        console.log(data)
        setProposal(data.proposal);
        setJob(data.proposal.job);
        setSkill(data.proposal.job.skills);
        console.log(data.proposal.job.skills);
      })
      .catch(error => {
        console.log(error, "Error")
        history.push('/proposal');
      });
  }, [history])
  return (
    <>
      <Row className="mt-4 p-4">

        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} xl={12} md={12} className="d-block mb-4 mb-md-0">
                  <h1 className="h2 heading36">Proposal details</h1>
                  <p className="project-subheading">Only you can see this</p>
                </Col>
                {/* Submit from  */}
                <Col xs={12} xl={12} md={12} className="mb-2 mt-4">
                  <Row>
                    <Col xs={12} sm={12} xl={12} >
                      <h6 className="job-like-title submit-project-heading2">{jobData.title}</h6>
                    </Col>
                  </Row>
                  <Row className="d-flex mt-3">
                    <Col xs={4} sm={3} md={2} xl={2}>
                      <h6 className="mb-0 fund-subheading">Job Type</h6>
                      <p className="fund-subheading text-danger mt-1">
                        {jobData.type}
                      </p>
                    </Col>
                    <Col  xs={4} sm={3} md={2} xl={2}>
                      <h6 className="mb-0 fund-subheading">Location</h6>
                      <p className="fund-subheading mt-2">
                        <Image src={enFlag} alt="en Flag" />
                        Germany
                      </p>
                    </Col>
                    <Col  xs={4} sm={3} md={3} xl={3}>
                      <h6 className="mb-0 fund-subheading">Client Final Price</h6>
                      <p className="fund-subheading mt-2">
                        <span className="price-text-danger">${jobData.budget} </span> ( FIXED )
                      </p>
                    </Col>
                  </Row>
                  <Row className="d-flex mt-3">
                      <h4 className="mb-0 project-count-heading heading20">Overview</h4>
                      <hr className="red-line"/>
                    <Col xs={12} sm={12} md={12} >
                      <p className="proposal-detail">{removeTags(jobData.description)}</p>
                    </Col>
                  </Row>
                  <Row className="d-flex mt-3">
                      <h4 className="mb-0 project-count-heading heading20">Skills Required </h4>
                      <hr className="red-line  border-bottom"/>
                      <Col xs={12} sm={12} md={12} >
                        {jobSkill.map((item, i) => (
                          <Badge className="me-1 bg-light-red">{item}</Badge>
                        ))}
                      </Col>
                    {/* <Col xs={12} sm={12} md={12} >
                      
                      <Badge className="me-1 bg-light-red">Illustrator</Badge>
                      <Badge className="me-1 bg-light-red">HTML</Badge>
                      <Badge className="me-1 bg-light-red">Whiteboard</Badge>
                      <Badge className="me-1 bg-light-red">HTML</Badge>
                      <Badge className="me-1 bg-light-red">Whiteboard</Badge>
                    </Col> */}
                  </Row>
                  <Row className="d-flex mt-3">
                      <h4 className="mb-0 project-count-heading heading20">About The Client</h4>
                      <hr className="red-line  border-bottom"/>
                    <Col xs={12} sm={12} md={12} >
                      <StarReviewComponent />
                      <p className="review-text">
                        United States <span  className="review-text-gry">Tampa</span>  
                      </p>
                      <p className="review-text">
                        25 Jobs Posted  <span className="review-text-gry">80% Hire Rate, 1 Job Open</span> 
                      </p>
                      <p className="review-text">
                        $ 200M+ Total Spent   <span className="review-text-gry"> 372 Hires, 55 Active</span> 
                      </p>
                    </Col>
                  </Row>
                  <Row className="d-flex mt-3">
                      <h4 className="mb-0 project-count-heading heading20">You'll Receive</h4>
                      <hr className="red-line  border-bottom"/>
                    <Col xs={12} sm={12} md={12} >
                      <p className="withdrwa-subheading">The estimated payment, after service fees.</p>
                      <p className="withdrwa-subheading text-light-blue">${proposalData.totalPriceAfterFee}</p>
                    </Col>
                    <Col md={12} className="mt-3">
                      <Button type="submit" as={Link} to={Routes.SubmitProposal.path} className="m-1 proposal-submitBtn">Edit Proposals</Button>
                      <Button as={Link} to={Routes.WithdrawProposal.path} className=" m-1 proposal-cancelBtn">Withdraw Proposal</Button>
                    </Col>
                  </Row>
                  <Row className="d-flex mt-3">
                      <h4 className="mb-0 project-count-heading heading20">Cover Letter</h4>
                      <hr className="red-line"/>
                    <Col xs={12} sm={12} md={12} >
                      <p className="proposal-detail">{removeTags(proposalData.additionalInfo)}</p>
                    </Col>
                  </Row>
                </Col>
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

export default ProposalDetail;