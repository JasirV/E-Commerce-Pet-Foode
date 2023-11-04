import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="#"><img src="https://www.findroyalcanin.com/cdn/shop/files/logo.png?v=1684396119"  className='w-50'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><h5>Home</h5></Nav.Link>
            <Nav.Link href="#action2"><h5>Dog</h5></Nav.Link>
            <Nav.Link href="#" >
              <h5>Cat</h5>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 mr-3"
              aria-label="Search"
              style={{borderRadius:"5rem"}}
            />
            <Button variant="outline-secondary" style={{marginRight:"1rem", borderRadius:"5rem"}}>Search</Button>
            <Nav.Link className='m-2'>Login</Nav.Link>
            <p className="m-2">|</p>
            <Nav.Link className='m-2'>Register</Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;