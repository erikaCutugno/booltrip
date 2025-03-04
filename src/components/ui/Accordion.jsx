export default function Accordion({ firstName, lastName }) {
  return (
    <div className="bg-amber-200 m-auto">
      {" "}
      <div className="flex gap-2 p-4">
        <div>{firstName}</div>
        <div> {lastName}</div>
      </div>
    </div>
  );
}
