import { Link, NavLink } from 'react-router-dom'

// Bootstrap
import { Container, Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {
	return (
		<Navbar className="navbar" variant="dark" expand="md">
			<Container>
				<Navbar.Brand as={Link} to="/">The Movie DB</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/genre">All Movies</Nav.Link>
						<Nav.Link as={NavLink} end to="/">Home</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
