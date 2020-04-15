import React, { Component } from 'react';
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
import AddComponent from '../../FormComponents/AddComponent';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">  
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <strong>ເພີ່ມຂໍ້ມູນເຂົ້າ​ລະ​ບົບ</strong> {/*Elements*/}
              </CardHeader>
              <AddComponent />
              
              <CardFooter style={{textAlign:"center"}}>
                <Button  type="submit" size="sm" style={{backgroundColor:"#4FA09D"}}>{/*<i className="fa fa-dot-circle-o"></i>*/} ຕົກລົງ</Button><label className='py-3 px-md-5'></label>
                <Button  type="reset" size="sm" color="primary">{/*<i className="fa fa-ban"></i>*/} ປ້ອນຄ່າໃໝ່ </Button>
              </CardFooter>
            </Card>
            
          </Col>
          
        </Row>
        
      </div>
    );
  }
}

export default Forms;
