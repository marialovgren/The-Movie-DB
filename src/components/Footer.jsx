import { Link, NavLink } from 'react-router-dom'

// Bootstrap
import { Row, Col, Nav, Navbar } from 'react-bootstrap'

// Logo
import logo from '../assets/images/logo.png'

const Footer = () => {
	return (
       <Navbar variant="light p-3">
            <Row className="footer d-flex justify-content-between align-items-center">
                <Col xs={4}>
                    <p>2022 Movie DB, Inc</p>
                </Col>

                <Col xs={2} md={1}>
                    <div 
                        action="true"
                        as={Link}
                        to={"/"}
                        >
                        <img 
                            className="d-block w-100"
                            src={logo}
                            alt="Logo"
                            />
                        </div>
                </Col>

                <Col xs={4}>
                    <Nav className="d-flex justify-content-end align-self-center">
						<Nav.Link as={NavLink} end to="/genre">All Movies</Nav.Link>
						<Nav.Link as={NavLink} end to="/">Home</Nav.Link>
					</Nav>
                </Col>
			</Row>
        </Navbar>
	)
}

export default Footer
