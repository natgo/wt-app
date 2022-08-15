import { useParams } from "react-router-dom";

export function Vehicle(): JSX.Element {
  const params = useParams();
  console.log(params);
  return (
    <iframe
      src={`http://localhost:5173/wikitext-transpiled/${encodeURI(params.vehicleId)}.html`}
      width={"100%"}
      height={"100%"}
    ></iframe>
  );
}
