import Container from "../components/ui/Container";
import travels from "../data/travelData";
import { useParams } from "react-router";
import Accordion from "../components/ui/Accordion";
export default function SingleTravel() {
  const { id } = useParams();

  const travel = travels.find((travel) => travel.id === parseInt(id));
  return (
    <>
      <div className="mt-10 space-y-6">
        {travel.people.map((elm) => {
          return (
            <div key={elm.id} className="flex gap-2">
              <Accordion firstName={elm.firstName} lastName={elm.lastName} />
            </div>
          );
        })}
      </div>
    </>
  );
}
