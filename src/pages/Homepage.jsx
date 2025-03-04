import travels from "../data/travelData";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";

export default function Homepage() {
  console.log(travels);
  return (
    <>
      <Container size="sm">
        <div className="mt-9">
          <div className="my-10">
            <Heading level={1}>Lista viaggi</Heading>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {travels.map((travel) => (
              <div key={travel.id}>
                <Card
                  destination={travel.destination}
                  start={travel.startDate}
                  end={travel.endDate}
                  link={`/travel/${travel.id}`}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
