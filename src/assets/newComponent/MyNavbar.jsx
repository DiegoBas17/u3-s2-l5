import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to={`/meteo-city/` + "roma"} className="nav-link">
              Roma
            </NavLink>
            <NavLink to={`/meteo-city/` + "milano"} className="nav-link">
              Milano
            </NavLink>
            <NavLink to={`/meteo-city/` + "catania"} className="nav-link">
              Catania
            </NavLink>
            <NavLink to={`/meteo-city/` + "sassari"} className="nav-link">
              Sassari
            </NavLink>
            <NavLink to={`/meteo-city/` + "latina"} className="nav-link">
              Latina
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
