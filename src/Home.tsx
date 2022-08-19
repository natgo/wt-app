import { useSetRecoilState } from "recoil";

import axios from "axios";

import { Final } from "./atom";
import { FinalProp } from "./types";

export function Home(): JSX.Element {
  const finalSetValue = useSetRecoilState(Final);
  axios.get("http://localhost:5173/final.json").then((response) => {
    const final: FinalProp = response.data;
    finalSetValue(final);
  });

  return <div>Kotisivu</div>;
}
