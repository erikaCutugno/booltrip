import { Link } from "react-router";

export default function Logo() {
  return (
    <>
      <Link to="/">
        <img className="w-40 " src="/1.svg" alt="logo" />
      </Link>
    </>
  );
}
