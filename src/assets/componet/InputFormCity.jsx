import { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";

const InputFormCity = ({ setCity }) => {
  const [inputCity, setInputCity] = useState("");
  return (
    <Container className="d-flex justify-content-center rounded">
      <InputGroup className="mb-3 w-50">
        <Form.Control
          placeholder="Inserisci qui la tua città"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className="w-50"
          onChange={(e) => {
            setInputCity(e.target.value.toLocaleLowerCase());
          }}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          className="btn-light"
          onClick={() => {
            setCity(inputCity);
          }}
        >
          <Search className="mb-1" />
        </Button>
      </InputGroup>
    </Container>
  );
};
export default InputFormCity;
