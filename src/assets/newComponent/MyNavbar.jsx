import {
  Container,
  Nav,
  Navbar,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../designer.jpeg";

const MyNavbar = () => {
  const renderTooltip = (text) => <Tooltip id="button-tooltip">{text}</Tooltip>;

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/" className="nav-link">
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip("Home")}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: "4rem", width: "4rem" }}
                  className="rounded-4"
                />
              </OverlayTrigger>
            </NavLink>
            <NavLink to={`/meteo-city/` + "Tokyo"} className="nav-link">
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip("Tokyo")}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="tokyo"
                  style={{ height: "4rem", width: "4rem" }}
                  className="rounded-4"
                />
              </OverlayTrigger>
            </NavLink>
            <NavLink to={`/meteo-city/` + "Delhi"} className="nav-link">
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip("Delhi")}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1661962487775-ad45f3a277e1?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="delhi"
                  style={{ height: "4rem", width: "4rem" }}
                  className="rounded-4"
                />
              </OverlayTrigger>
            </NavLink>
            <NavLink to={`/meteo-city/` + "Shanghai"} className="nav-link">
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip("Shanghai")}
              >
                <img
                  src="https://plus.unsplash.com/premium_photo-1675826460422-e39481fae224?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Shanghai"
                  style={{ height: "4rem", width: "4rem" }}
                  className="rounded-4"
                />
              </OverlayTrigger>
            </NavLink>
            <NavLink to={`/meteo-city/` + "Roma"} className="nav-link">
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip("Roma")}
              >
                <img
                  src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Roma"
                  style={{ height: "4rem", width: "4rem" }}
                  className="rounded-4"
                />
              </OverlayTrigger>
            </NavLink>
            <NavLink to={`/meteo-city/` + "New York"} className="nav-link">
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip("New York")}
              >
                <img
                  src="https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="New York"
                  style={{ height: "4rem", width: "4rem" }}
                  className="rounded-4"
                />
              </OverlayTrigger>
            </NavLink>
            <NavLink to={`/meteo-city/` + "Londra"} className="nav-link">
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip("Londra")}
              >
                <img
                  src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Londra"
                  style={{ height: "4rem", width: "4rem" }}
                  className="rounded-4"
                />
              </OverlayTrigger>
            </NavLink>
            <NavLink to={`/meteo-city/` + "Parigi"} className="nav-link">
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip("Parigi")}
              >
                <img
                  src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Parigi"
                  style={{ height: "4rem", width: "4rem" }}
                  className="rounded-4"
                />
              </OverlayTrigger>
            </NavLink>
            <NavLink to={`/meteo-city/` + "Singapore"} className="nav-link">
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip("Singapore")}
              >
                <img
                  src="https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Singapore"
                  style={{ height: "4rem", width: "4rem" }}
                  className="rounded-4"
                />
              </OverlayTrigger>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default MyNavbar;
