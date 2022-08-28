import { Row, Col, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Footer = () => {
	return (
       <Navbar variant="light">
            <Row className="footer d-flex justify-content-between p-3">
                <Col xs={12} md={4}>
                    <p>2022 Movie DB, Inc</p>
                </Col>

                <Col xs={12} md={1}>
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

                <Col xs={12} md={4}>
                    <Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/genre">All Movies</Nav.Link>
						<Nav.Link as={NavLink} end to="/">Home</Nav.Link>
					</Nav>

                </Col>
			</Row>
            </Navbar>
	)
}

export default Footer
