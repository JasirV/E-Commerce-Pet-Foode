import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function Navigation() {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="https://www.findroyalcanin.com/cdn/shop/files/logo.png?v=1684396119"
            className="w-50"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            <Nav.Link onClick={()=>{navigate("/addminhome")}}>
              <h5>Home</h5>
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/Dog");
              }}>
              <h5>Dog</h5>
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/Cat");
              }}>
              <h5>Cat</h5>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 mr-3"
              aria-label="Search"
              style={{ borderRadius: "5rem" }}
            />
            <Button
              variant="outline-secondary"
              style={{ marginRight: "1rem", borderRadius: "5rem" }}>
              Search
            </Button>
            <Nav.Link
              onClick={() => {
                navigate("/Login");
              }}
              className="m-2">
              Login
            </Nav.Link>
            <p className="m-2">|</p>
            <Nav.Link
              className="m-2"
              onClick={() => {
                navigate("/Cart");
              }}>
              <AiOutlineShoppingCart />
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
