import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table, Dropdown, DropdownItem, DropdownMenu, DropdownToggle,
Label, Input, Button
} from 'reactstrap';
import EditModalComponent from '../../Modals/EditModalComponent'

class Tables extends Component {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: new Array(6).fill(false),
     
    };
   
  };

 


  toggle(i) {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }

  render() {
    
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> ເບິ່ງຂໍ້ມູນ
              </CardHeader>
              <CardBody>
                <Row style={{marginBottom:"10px"}}>
                
                    <Col md="1">
                    <Label htmlFor="select">ລາຍການ</Label>
                    </Col>
                    <Col xs="12" md="4" style={{marginLeft:"-30px"}}>
                      <Input type="select" name="select" id="select">
                        <option value="0">ກະລຸນາເລືອກລາຍການ</option>
                        <option value="1">ຊື່ອາຈານ</option>
                        <option value="2">ຊື່ຜູ້ໃຊ້</option>
                        <option value="3">ຊື່ວິຊາ</option>
                        <option value="4">ມະຫາໄລ</option>
                        <option value="5">ພະນັກງານ</option>
                        
                      </Input>
                    </Col>
                    <Col md="1">
                    <Label htmlFor="select">ຊັ້ນ</Label>
                    </Col>
                    <Col xs="12" md="4" style={{marginLeft:"-50px"}}>
                      <Input type="select" name="select" id="select">
                        <option value="0">ກະລຸນາເລືອກຊັ້ນ</option>
                        <option value="1">ຊັ້ນປະຖົມ</option>
                        <option value="2">ຊັ້ນມັດທະຍົມ</option>
                        <option value="3">ຊັ້ນມັດທະຍົມຕອນປາຍ</option>
                        <option value="4">ມະຫາໄລ</option>
                        <option value="5">ພະນັກງານ</option>
                        <option value="6">ທົ່ວໄປ</option>
                        
                      </Input>
                    </Col>
                    
                </Row>
              
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Date registered</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>001</td>
                    <td>Vishnu Serghei</td>
                    <td>2012/01/01</td>
                    <td>Member</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                    <td>
                    <Link to="../theme/typography" className="nav-link"><Button color="success" >Edit</Button></Link>
                    </td>
                    <td>
                    <EditModalComponent />
                    </td>
                  </tr>
                  <tr>
                    <td>002</td>
                    <td>Zbyněk Phoibos</td>
                    <td>2012/02/01</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="danger">Banned</Badge>
                    </td>
                    <td>
    
                    <Link to="../theme/typography" className="nav-link"><Button color="success" >Edit</Button></Link>
                    
        
                    </td>
                    <td>
                    <EditModalComponent />
                    </td>
                  </tr>
                  <tr>
                    <td>003</td>
                    <td>Einar Randall</td>
                    <td>2012/02/01</td>
                    <td>Admin</td>
                    <td>
                      <Badge color="secondary">Inactive</Badge>
                    </td>
                    <td>
                    <Link to="../theme/typography" className="nav-link"><Button color="success" >Edit</Button></Link>
                    </td>
                    <td>
                    <EditModalComponent />
                    </td>
                  </tr>
                  <tr>
                    <td>004</td>
                    <td>Félix Troels</td>
                    <td>2012/03/01</td>
                    <td>Member</td>
                    <td>
                      <Badge color="warning">Pending</Badge>
                    </td>
                    <td>
                    <Link to="../theme/typography" className="nav-link"><Button color="success" >Edit</Button></Link>
                    </td>
                    <td>
                    <EditModalComponent />
                    </td>
                  </tr>
                  <tr>
                    <td>005</td>
                    <td>Aulus Agmundr</td>
                    <td>2012/01/21</td>
                    <td>Staff</td>
                    <td>
                      <Badge color="success">Active</Badge>
                    </td>
                    <td>
                    <Link to="../theme/typography" className="nav-link"><Button color="success" >Edit</Button></Link>
                    </td>
                    <td>
                    <EditModalComponent />
                    </td>
                  </tr>
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}

export default Tables;
