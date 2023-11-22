import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { AllContext } from "../App";
function Navigation() {
  const navigate = useNavigate();
  const { login, setLoging, setCart } = useContext(AllContext);
  const handleLogout = () => {
    setLoging(false);
    setCart([]);
  };
  return (
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="https://www.findroyalcanin.com/cdn/shop/files/logo.png?v=1684396119"
            className="w-50"
            alt="logo"
            onClick={() => {
              navigate("/");
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            <Nav.Link
              onClick={() => {
                navigate("/collection");
              }}>
              <h5>All Category</h5>
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
          {login ? (
            <>
            <Nav.Link style={{ fontSize: '1.2rem' }} className="m-1" onClick={handleLogout}>
  Logout
</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link
              style={{ fontSize: '1.2rem' }}
                className="m-1"
                onClick={() => {
                  navigate("/Login");
                }}>
                Login
              </Nav.Link>
            </>
          )}
          <p className="m-1">|</p>
          <Nav.Link
            className="m-1 mx-"
            onClick={() => {
              navigate("/Cart");
            }}>
  <AiOutlineShoppingCart style={{ fontSize: '1.3em' }} />

          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
