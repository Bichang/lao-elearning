import React, { Component } from 'react';
import AddComponent from '../../FormComponents/AddComponent';
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

class Typography extends Component {
  render() {
    return (
      <div>
        <Row>
        <Col xs="12">
        <Card>
        <CardHeader>
                <strong>ແກ້ໄຂຂໍ້ມູນ</strong> {/*Elements*/}
        </CardHeader>
        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
        <FormGroup row style={{marginLeft:"3px",marginTop:"20px", marginBottom:"0px" }}>
                    <Col md="3">
                      <Label htmlFor="text-input">ID</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="id-input" style={{width:"720px"}} name="id-input" placeholder="ປ້ອນໄອດີຂໍ້ມຸນທີຢາກແກ້ໄຂ" />
                      {/* <FormText color="muted">This is a help text</FormText> */}
                    </Col>
          </FormGroup>
        </Form>
        
        <AddComponent />
        <CardFooter style={{textAlign:"center"}}>
                <Button  type="submit" size="sm" style={{backgroundColor:"#4FA09D"}}>{/*<i className="fa fa-dot-circle-o"></i>*/} ແກ້ໄຂ</Button><label className='py-3 px-md-5'>{"OR"}</label>
                <Button  type="reset" size="sm" color="primary">{/*<i className="fa fa-ban"></i>*/} ລົບຂໍ້ມຸນ </Button>
        </CardFooter>
        </Card>
        </Col>
        </Row>
      </div>
    );
  }
}

export default Typography;
