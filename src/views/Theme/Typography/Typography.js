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
import EditFormCompoment from '../../FormComponents/EditFormCompoment';
import { Link } from 'react-router-dom';

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
        <EditFormCompoment />
        <CardFooter style={{textAlign:"center"}}>
                <Button  type="submit" size="sm" style={{backgroundColor:"#4FA09D"}}>{/*<i className="fa fa-dot-circle-o"></i>*/} ແກ້ໄຂ</Button><label className='py-3 px-md-5'>{"OR"}</label>
                <Link to="../base/tables">
                <Button  type="reset" size="sm" color="primary">{/*<i className="fa fa-ban"></i>*/} ກັບຄືນ </Button>
                </Link>
        </CardFooter>
        </Card>
        </Col>
        </Row>
      </div>
    );
  }
}

export default Typography;
