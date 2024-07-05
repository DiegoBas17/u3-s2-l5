import { Container, Nav, Navbar } from "react-bootstrap";

const MyNavbar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="text-light">
              Roma
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              Milano
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              Catania
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              Sassati
            </Nav.Link>
            <Nav.Link href="#link" className="text-light">
              Latina
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
