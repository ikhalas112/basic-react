import { useParams } from "react-router-dom";

export default function About() {
  const { id } = useParams();
  return <div>About with Id {id}</div>;
}
