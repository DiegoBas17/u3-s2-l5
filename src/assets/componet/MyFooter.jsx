import { Container } from "react-bootstrap";
import { Facebook, Instagram, TwitterX, Youtube } from "react-bootstrap-icons";

const MyFooter = () => {
  return (
    <footer className="mt-3">
      <Container className="d-flex justify-content-center my-2">
        <a href="#" className="text-decoration-none">
          <Facebook style={{ fill: "black" }} />
        </a>
        <a href="#" className="text-decoration-none mx-3">
          <TwitterX style={{ fill: "black" }} />
        </a>
        <a href="#" className="text-decoration-none">
          <Instagram style={{ fill: "black" }} />
        </a>
        <a href="#" className="text-decoration-none ms-3">
          <Youtube style={{ fill: "black" }} />
        </a>
      </Container>

      <p className="text-center my-1">EpiBook from Diego Basili</p>
      <p className="text-center my-1">
        Email: info@epibooks.com | Tel: +1234567890
      </p>
      <p className="text-center my-1">
        &copy; 2024 EpiBooks. Tutti i diritti riservati.
      </p>
    </footer>
  );
};
export default MyFooter;
