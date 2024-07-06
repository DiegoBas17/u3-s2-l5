import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to={`/meteo-datails/` + "roma"} className="nav-link">
              Roma
            </NavLink>
            <NavLink to={`/meteo-datails/` + "milano"} className="nav-link">
              Milano
            </NavLink>
            <NavLink to={`/meteo-datails/` + "catania"} className="nav-link">
              Catania
            </NavLink>
            <NavLink to={`/meteo-datails/` + "sassari"} className="nav-link">
              Sassari
            </NavLink>
            <NavLink to={`/meteo-datails/` + "latina"} className="nav-link">
              Latina
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
