
import React, {useState} from "react";
import { Col, Row, Card, Button, Form, InputGroup } from '@themesberg/react-bootstrap';
import { useHistory} from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import cogoToast from 'cogo-toast';
import Select from 'react-select';

const user = JSON.parse(localStorage.getItem('user'));

const options = [
    { value: 'development', label: 'Web Develoment' },
    { value: 'designing', label: 'Designing' },
    { value: 'java', label: 'Java' },
    { value: 'block-chain', label: 'Block Chain' }
  ]
const categoryArr = [
    {value: 'Select Category', label: 'Select Category'},
    {value: 'Development', label: 'Development'},
    {value: 'UI/UX', label: 'UI/UX'},
    {value: 'Block Chain', label: 'Block Chain'},
]

const priceTypeArr = [
    {value: 'Select Price Type', label: 'Select Price Type'},
    {value: 'Monthly', label: 'Monthly'},
    {value: 'Weekly', label: 'Weekly'},
    {value: 'Hourly', label: 'Hourly'},
]
const PostJob = () => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState(categoryArr[0].value);
    const [price, setPrice] = useState("");
    const [priceType, setPriceType] = useState("");
    const [selectedOptions, setSelectedOptions] = useState();
    const [specialty, setSpecialty] = useState("");
    const [estimateTime, setEstimateTime] = useState("");
    const [detail, setDetail] = useState("");
    const [currentFile, setCurrentFile] = useState(undefined);
    const [previewImage, setPreviewImage] = useState(undefined);
    const history = useHistory();

    // Function triggered on selection
    const handleSelect = (data) => {
        setSelectedOptions(data);
    }

    const selectFile = (event) => {
        setCurrentFile(event.target.files[0]);
        setPreviewImage(URL.createObjectURL(event.target.files[0]));
      };

    const postJob = ()=>{
        try {
            if(title === ''){
                cogoToast.error("Project Title Required!",{
                    position: 'top-right',
                    hideAfter: 3,
                });    
            }
            if(category === ''){
                cogoToast.error("Select Category!",{
                    position: 'top-right',
                    hideAfter: 3,
                });    
            }
            if(price === ''){
                cogoToast.error("Project Budget Require!",{
                    position: 'top-right',
                    hideAfter: 3,
                });    
            }
            if(priceType === ''){
                cogoToast.error("Project Budget Require!",{
                    position: 'top-right',
                    hideAfter: 3,
                });    
            }
            if(selectedOptions=== undefined || selectedOptions.length < 1){
                cogoToast.error("Select atleast one skill!",{
                    position: 'top-right',
                    hideAfter: 3,
                });    
            }
            if(specialty === ''){
                cogoToast.error("Specialty is Required!",{
                    position: 'top-right',
                    hideAfter: 3,
                });    
            }
            if(estimateTime === undefined && estimateTime === ''){
                cogoToast.error("Estimate Time Required!",{
                    position: 'top-right',
                    hideAfter: 3,
                });    
            }
            if(currentFile === undefined && previewImage === undefined){
                cogoToast.error("Select Document!",{
                    position: 'top-right',
                    hideAfter: 3,
                });    
            }
            if(detail === undefined && detail === ''){
                cogoToast.error("Project Detail Required!",{
                    position: 'top-right',
                    hideAfter: 3,
                });    
            }
            let skill = [];
            selectedOptions.forEach((item)=>{
                skill.push(item.label);
            });
            
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            let jobDetail = {title: title, category: category, budget: price, detail: detail, skills: skill, projectPdf: {public_id: currentFile.name, url: previewImage}, specialty: specialty, estimateTime: estimateTime, description: detail, postedBy: user._id, type: priceType};
            
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(jobDetail),
                redirect: 'follow'
            };
            console.log(user._id)
            
            fetch(`http://16.171.150.73/api/v1/PostJob/${user._id}`, requestOptions)
                .then(response => response.text())
                .then((result) => {
                    let data = JSON.parse(result);
                    if(data.success) {
                        cogoToast.success(data.message,{
                          position: 'top-right',
                          hideAfter: 3,
                        });
                        history.push("/client-proposal")
                      }
                      else{
                        cogoToast.error(data.message,{
                          position: 'top-right',
                          hideAfter: 3,
                        });
                      }
                })
        } catch (error) {
            cogoToast.error(error.message,{
                position: 'top-right',
                hideAfter: 3,
              });
        }
    }

  return (
    <>
      <Row className="mt-4 p-4">

        <Col xs={12} xl={8} className="mb-4 offset-2">
        <h1 className="job-like-title submit-project-heading2">Add New Project</h1>
          <Card border="light" className="shadow-sm">
            <Card.Body>
                <Row>
                    <Col md={12} className="mb-3">
                        <Form.Group id="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="React Native Developer" />
                        </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                        <Form.Group id="category">
                        <Form.Label>Category Type</Form.Label>
                        <Form.Select value={category} onChange={(e)=>setCategory(e.target.value)}>
                            {categoryArr.map((item, i) => (
                                <option value={item.value} key={i}>
                                    {item.label}
                                </option>
                            ))}
                        </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                        <Form.Group id="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control required type="number" placeholder="100" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                        <Form.Group id="price">
                        <Form.Label>Price Type</Form.Label>
                        <Form.Select value={priceType} onChange={(e)=>setPriceType(e.target.value)}>
                            {priceTypeArr.map((item, i) => (
                                <option value={item.value} key={i}>
                                    {item.label}
                                </option>
                            ))}
                        </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                        <Form.Group>
                            <Form.Label>Skill</Form.Label>
                            <InputGroup className="input-group-merge">
                                {/* <Form.Control type="text" placeholder="Developers, 1 Week, 2500$" className=" project-count-subheading border-40" /> */}
                                <Select
                                    defaultValue={[0]}
                                    placeholder="Web Development, Java"
                                    isMulti
                                    options={options}
                                    className="basic-multi-select form-control project-count-subheading border-40 input-border-40-focus"
                                    value={selectedOptions}
                                    onChange={handleSelect}
                                />
                            </InputGroup>
                                <p className="limit-drop-img">Enter skills for needed for project</p>
                        </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                        <Form.Group id="specialty">
                            <Form.Label>Specialty</Form.Label>
                            <Form.Control required type="text" value={specialty} onChange={(e)=>setSpecialty(e.target.value)} placeholder="React Native" />
                        </Form.Group>
                    </Col>
                    <Col md={12} className="mb-3">
                        <Form.Group id="estimateTime">
                            <Form.Label>Estimate Time</Form.Label>
                            <Form.Control required type="text" value={estimateTime} onChange={(e)=>setEstimateTime(e.target.value)} placeholder="2 weeks" />
                        </Form.Group>
                    </Col>
                    {/* <Col xs={12} sm={12} md={12} className="mb-3">
                        <Form.Group id="price">
                            <Form.Label>Period of Project</Form.Label>
                            <fieldset className="period-option">
                            <Form.Check
                                defaultChecked
                                type="radio"
                                defaultValue="start-immediate"
                                label="Start immediately after the candidate is selected"
                                name="exampleRadios"
                                id="start-imme"
                                htmlFor="start-imme"
                                />
                                <Form.Check
                                type="radio"
                                defaultValue="start-later"
                                label="Job will Start On"
                                name="exampleRadios"
                                id="start-later"
                                htmlFor="start-later"
                                />
                            </fieldset>
                            <Form.Control type="date" placeholder="Select Date" className="w-50 mt-2" />
                        </Form.Group>
                    </Col> */}
                    <Col md={12} className="mb-3">
                        <Form.Group id="document">
                            <Form.Label>Add Document</Form.Label>
                            <Form.Control required type="file"  onChange={selectFile} />
                            <p className="limit-drop-img">Size of the Document should be Below 2MB</p>
                        </Form.Group>
                    </Col>
                    {/* <Col md={12} className="mb-3">
                        <ClientLinkInput />
                    </Col> */}
                    <Col xs={12} sm={12} md={12} className="mt-3">
                        {/* <Form.Group id="document"></Form.Group> */}
                        <Form.Label>Write Description of Projects</Form.Label>
                        <CKEditor
                            editor={ ClassicEditor }
                            data=""
                            placeholder="Write Description of Projects"
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                setDetail(data);
                            } }
                        />
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4} className="mt-3 offset-8">
                      <Button type="submit" onClick={postJob} className="m-1 personal-tab-update">Submit Project</Button>
                    </Col>
                </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PostJob;