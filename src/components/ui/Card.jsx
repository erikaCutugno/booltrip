import { Link } from "react-router";
import Heading from "./Heading";

export default function Card({ destination, start, end, link }) {
  return (
    <>
      <Link to={link}>
        <div className="bg-[#ff9900] text-white rounded-xl space-y-2 p-4  h-full">
          <Heading level={1}>{destination}</Heading>
          <p>{start}</p>
          <p>{end}</p>
        </div>
      </Link>
    </>
  );
}
