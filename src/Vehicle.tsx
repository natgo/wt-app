import { useParams } from "react-router-dom";

import axios from "axios";

export function Vehicle() {
  const params = useParams();
  console.log(params);
  const source = `https://wiki.warthunder.com/api.php?action=parse&format=json&prop=text&page=${params.vehicleId}`;
  console.log(source);
  const page = axios.get(source);
  console.log(page);

  return <div></div>;
}
