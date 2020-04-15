import React, { Component } from 'react'
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Fade,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupText,
    Label,
    Row,
  } from 'reactstrap';

export default class AddComponent extends Component {
    render() {
        return (
            <div>
                <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">ຊື່ອາຈານ</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="ຊື່ອາຈານ" />
                      {/* <FormText color="muted">This is a help text</FormText> */}
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">ປະເພດ</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">ກະລຸນາເລືອກປະເພດ</option>
                        <option value="1">ຄະນິດຕະສາດ</option>
                        <option value="2">ເຄມີສາດ</option>
                        <option value="3">ຟີຊີກສາດ</option>
                        <option value="3">ພາສາສາດ</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">ຊັ້ນ</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">ກະລຸນາເລືອກຊັ້ນ</option>
                        <option value="1">ຊັ້ນປະຖົມ</option>
                        <option value="2">ຊັ້ນມັດທະຍົມ</option>
                        <option value="3">ຊັ້ນມັດທະຍົມຕອນປາຍ</option>
                        <option value="4">ມະຫາໄລ</option>
                        <option value="5">ພະນັກງານ</option>
                        
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">ຊື່ວິຊາ</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="subject-input" name="subject-input" placeholder="ວິຊາ" />
                      {/* <FormText color="muted">This is a help text</FormText> */}
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">ກຸ່ມເປົ້າຫມາຍ</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="target-input" id="target-input" rows="6"
                             placeholder="ກຸ່ມເປົ້າຫມາຍ..." />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">ເນື້ອໃນໂດຍລວມ</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="concept-input" id="concept-input" rows="9"
                             placeholder="ເນື້ອໃນໂດຍລວມ..." />
                    </Col>
                  </FormGroup>
                  
                  {/** attach preview video */}
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="preview-video-input">ວີດີໂອໂດຍລວມ</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="preview-video-input" name="preview-video-input" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">ຫົວຂໍ້</Label>
                    </Col>
                    <Col xs="12" md="6">
                      <Input type="text" id="title-input" name="titile-input" placeholder="ຫົວຂໍ້" />
                      {/* <FormText color="muted">This is a help text</FormText> */}
                    </Col>
                    <Col md="3"> 
                      <Button type="button" size="sm" color="primary"><i className="fa fa-plus-circle"></i> ເພີ່ມຫົວຂໍ້</Button>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">ຫົວຂໍ້ຍ່ອຍ</Label>
                    </Col>
                    <Col xs="12" md="6">
                      <Input type="text" id="subtitle-input" name="subtitle-input" placeholder="ຫົວຂໍ້ຍ່ອຍ" />
                      {/* <FormText color="muted">This is a help text</FormText> */}
                    </Col>
                    <Col md="3"> 
                      <Button type="button" size="sm" color="primary"><i className="fa fa-plus-circle"></i> ເພີ່ມຫົວຂໍ້</Button>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="preview-video-input">ໄຟ້ວີດີໂອ</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="video-input" name="video-input" />
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="slider-input">ສະໄລ</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="slider-input" name="slider-input" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">ລາຄາ</Label>
                    </Col>
                    <Col xs="12" md="6">
                      <Input type="text" id="price-input" name="price-input" placeholder="ລາຄາ" />
                      {/* <FormText color="muted">This is a help text</FormText> */}
                    </Col>
                    <Col md="3">
                      <Label htmlFor="text-input">ກີບ</Label>
                    </Col>
                  </FormGroup>

                  
                </Form>
              </CardBody>
            </div>
        )
    }
}
