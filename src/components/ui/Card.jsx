import { Link } from "react-router";
import Heading from "./Heading";

export default function Card({ destination, start, end, link }) {
  return (
    <>
      <Link to={link}>
        <div className="bg-amber-500  hover:opacity-70 text-white rounded-xl space-y-2 p-4  h-full capitalize transform transition-transform duration-300 hover:scale-105">
          <Heading level={1}>{destination}</Heading>
          <p>Dal: {start}</p>
          <p>Al: {end}</p>
        </div>
      </Link>
    </>
  );
}
