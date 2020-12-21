import React from 'react'
import {Navbar,Button,Nav} from 'react-bootstrap'
import Logo from '../Images/Logo.png'
import {Link} from 'react-router-dom'
const NavigationBar = (props) => {

    return (
        <React.Fragment>
            <Navbar sticky='top' bg= 'dark' variant='dark' expand='lg'>
                <Navbar.Brand>
                    <img
                        src = {Logo}
                        width="64"
                        height="30"
                        className="d-inline-block align-top"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id = 'basic-navbar-nav'>
                    <Nav className= 'ml-auto'>
                        <Button onClick = {() => props.setModalVisible(true)}>Log In</Button>
                        <Link to = '/register'>
                            <Button>Register</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </React.Fragment>

    )

}

export default NavigationBar