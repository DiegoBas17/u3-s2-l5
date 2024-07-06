import { useParams } from "react-router-dom";

const MeteoDetails = () => {
  const params = useParams();
  const city = params.city;
  console.log(city);
  return (
    <div>
      <h1>{"ciao sei a:" + city}</h1>
    </div>
  );
};
export default MeteoDetails;
