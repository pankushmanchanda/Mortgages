import React from 'react';
import { Navbar, Form, Button, Nav, FormControl } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'
import axios from 'axios';


export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            search: '',
            user: {}
        }
    }

    // async fetchKey() {
    //     const res = await axios.get(`http://localhost:4000/users/${this.state.search}`, )
    //         .then(res => {
    //             console.log(res.data, "reqData is coming")
    //             this.setState({
    //                 user: res.data
    //             }, () => console.log(this.state.user.user, "-------------------")

    //             )

    //             localStorage.setItem("searchData1", JSON.stringify(this.state.user))

    //         })
    //         .catch(e => {
    //             throw new Error(e.response.data);
    //         });
    //     this.search.value = "";

    // }
    // searchKey = (e) => {
    //     console.log("hello", e.target.value)
    //     let val = e.target.value
    //     this.setState({
    //         search: val
    //     })
    //     localStorage.setItem('reqID', val)
    // }
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" expand="lg">
                    <Navbar.Brand href="/">Mortgage Loan</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav variant="pills" defaultActiveKey="/">
                        <Nav.Item>
                            <Nav.Link href="/paymentLoan">Payment Loan</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1" href='/paymentScheduler'>Payment Scheduler</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Navbar.Collapse id="basic-navbar-nav" className="left-spacing"  >



                        {/* <Form inline style={{ marginLeft: '200px' }} >
                            <FormControl type="text" placeholder="Search" className="mr-sm-2"
                                ref={el => this.search = el}
                                onChange={(e) => this.searchKey(e)} defaultValue={this.state.search} />
                            <Icon size="large" inverted name='search' className="searchIcon" color='white' link onClick={() => this.fetchKey()} />
                        </Form> */}
                        <Nav className="ml-auto">

                            <Nav.Link href="#link">Services</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>

                        <Form inline className="loginBtn">
                            <Button className="mr-sm-2" variant="outline-light" >LogIn </Button>

                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                {this.props.children}
            </div>
        )
    }
}
