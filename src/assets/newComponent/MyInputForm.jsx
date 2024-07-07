import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const MyInputForm = () => {
  const [inputCity, setInputCity] = useState("");
  const Navigate = useNavigate();
  return (
    <InputGroup className="mb-3">
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
        onClick={() => {
          Navigate("/meteo-city/" + inputCity);
        }}
      >
        <Search className="mb-1" />
      </Button>
    </InputGroup>
  );
};
export default MyInputForm;
