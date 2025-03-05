import { useState, useEffect } from "react";
// import travels from "../../data/travelData";
// import { useParams } from "react-router";
// import Accordion from "./Accordion";

export default function SearchBar({ setSearch }) {
  //   const [search, setSearch] = useState("");
  //   const [filteredPeople, setFilteredPeople] = useState([]);
  //   const { id } = useParams();

  //   const travel = travels.find((travel) => travel.id === parseInt(id));

  //   useEffect(() => {
  //     if (travel) {
  //       const filteredPeople = travel.people.filter((elm) => {
  //         const fullName = `${elm.firstName} ${elm.lastName}`;
  //         return fullName.toLowerCase().includes(search.toLowerCase());
  //       });

  //       setFilteredPeople(filteredPeople);
  //     }
  //   }, [search, travel]);
  const [localSearch, setLocalSearch] = useState(""); // Stato locale per l'input di ricerca

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalSearch(value); // Aggiorna lo stato locale
    setSearch(value); // Aggiorna lo stato nel componente genitore per filtrare
  };

  return (
    <>
      <form>
        <input
          type="search"
          placeholder="Search..."
          value={localSearch}
          onChange={handleChange}
          className="px-2 py-1 bg-neutral-200 rounded-md"
        />
      </form>
      {/* <div className="m-8 space-y-6">
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
      </div> */}
    </>
  );
}
