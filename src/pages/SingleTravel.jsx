import Container from "../components/ui/Container";
import travels from "../data/travelData";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Accordion from "../components/ui/Accordion";
import Heading from "../components/ui/Heading";
import SearchBar from "../components/ui/SearchBar";

export default function SingleTravel() {
  const { id } = useParams();
  const [search, setSearch] = useState("");
  const [filteredPeople, setFilteredPeople] = useState([]);
  const travel = travels.find((travel) => travel.id === parseInt(id));

  useEffect(() => {
    if (travel) {
      const filteredPeople = travel.people.filter((elm) => {
        const fullName = `${elm.firstName} ${elm.lastName}`;
        return fullName.toLowerCase().includes(search.toLowerCase());
      });

      setFilteredPeople(filteredPeople);
    }
  }, [search, travel]);
  return (
    <>
      <Container>
        <div className="flex justify-between items-center">
          <Heading level={1}>{travel.destination}</Heading>

          <div className="flex gap-3 font-bold">
            <Heading level={5}>Dal: {travel.startDate}</Heading>
            <Heading level={5}>Al: {travel.endDate}</Heading>
          </div>
        </div>

        <div className="mt-10 space-y-6 bg-white p-5 rounded-2xl shadow">
          <div className="space-y-6 flex justify-between">
            <Heading level={2}>Elenco partecipanti</Heading>
            <SearchBar setSearch={setSearch} className="items-center" />
          </div>

          {filteredPeople.length > 0 ? (
            filteredPeople.map((elm) => (
              <Accordion
                key={elm.id}
                firstName={elm.firstName}
                lastName={elm.lastName}
                email={elm.email}
                phone={elm.phone}
                taxCode={elm.taxCode}
              />
            ))
          ) : (
            <p>No results found</p>
          )}

          {/* {travel.people.map((elm) => {
            return (
              <div key={elm.id} className="flex gap-2">
                <Accordion
                  firstName={elm.firstName}
                  lastName={elm.lastName}
                  email={elm.email}
                  phone={elm.phone}
                  taxCode={elm.taxCode}
                />
              </div>
            );
          })} */}
        </div>
      </Container>
    </>
  );
}
