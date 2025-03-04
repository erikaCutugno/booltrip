import travels from "../data/travelData";

export default function SingleTravel() {
  return (
    <>
      {travels.map((travel) => {
        return (
          <div key={travel.id}>
            {travel.people.map((elm) => {
              return <div key={elm.id}>{elm.firstName}</div>;
            })}
          </div>
        );
      })}
    </>
  );
}
