import Container from "../components/ui/Container";
import travels from "../data/travelData";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import Accordion from "../components/ui/Accordion";
import Heading from "../components/ui/Heading";
import SearchBar from "../components/ui/SearchBar";

const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  taxCode: "",
};

export default function SingleTravel() {
  const { id } = useParams();

  const [search, setSearch] = useState("");
  const [filteredPeople, setFilteredPeople] = useState([]);

  const travel = travels.find((travel) => travel.id === parseInt(id));

  // Initialize people array if it's not set
  if (travel && !travel.people) {
    travel.people = [];
  }

  const [formData, setFormData] = useState(initialData);

  const handleField = (fieldName, fieldValue) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [fieldName]: fieldValue,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Date.now();
    const newPeople = {
      id,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      taxCode: formData.taxCode,
    };

    travel.people.push(newPeople);
    setFormData(initialData);
  };

  useEffect(() => {
    if (travel) {
      const filteredPeople = travel.people.filter((elm) => {
        const fullName = `${elm.firstName} ${elm.lastName}`;
        return fullName.toLowerCase().includes(search.toLowerCase());
      });

      setFilteredPeople(filteredPeople);
    }
  }, [search, travel, formData]);

  return (
    <>
      <Container size="sm">
        <Link
          to="/"
          className="bg-white rounded-full px-3 text-2xl text-slate-700 hover:bg-neutral-200"
        >
          <i className="fa-solid fa-left-long"></i>
        </Link>
        <div className="flex justify-between items-center text-slate-700 mt-4">
          <Heading level={1}>{travel?.destination}</Heading>

          <div className="flex gap-3 font-bold">
            <Heading level={5}>Dal: {travel?.startDate}</Heading>
            <Heading level={5}>Al: {travel?.endDate}</Heading>
          </div>
        </div>

        <div className="mt-10 space-y-6 bg-white text-slate-700 p-5 rounded-2xl shadow">
          <div className="space-y-6 flex justify-between text-slate-700">
            <Heading level={2}>Elenco partecipanti</Heading>
            <SearchBar setSearch={setSearch} className="items-center" />
          </div>

          {travel?.people.length === 0 ? (
            ""
          ) : filteredPeople.length > 0 ? (
            filteredPeople.map((elm) => (
              <Accordion
                key={elm.id}
                firstName={elm.firstName}
                lastName={elm.lastName}
                email={elm.email}
                phone={elm.phone}
                taxCode={elm.taxCode.toUpperCase()}
              />
            ))
          ) : (
            <p>Nessun partecipante trovato</p>
          )}
        </div>
        <section>
          <form
            onSubmit={handleSubmit}
            className="my-12 m-auto md:w-100  bg-white text-slate-700 space-y-6 p-4 rounded-xl shadow-xl "
          >
            <div className="flex">
              <label htmlFor="firstName" className="text-xl font-bold">
                Nome:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Inserisci il nome"
                value={formData.firstName}
                onChange={(e) => handleField("firstName", e.target.value)}
                className=" border border-slate-300 ml-3 px-2 py-1 w-full"
                required
              />
            </div>
            <div className="flex">
              <label htmlFor="lastName" className="text-xl font-bold">
                Cognome:
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Inserisci il cognome"
                value={formData.lastName}
                onChange={(e) => handleField("lastName", e.target.value)}
                className=" border border-slate-300 ml-3 px-2 py-1 w-full"
                required
              />
            </div>
            <div className="flex">
              <label htmlFor="email" className="text-xl font-bold">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={(e) => handleField("email", e.target.value)}
                className=" border border-slate-300 ml-3 px-2 py-1 w-full"
                required
              />
            </div>
            <div className="flex">
              <label htmlFor="phone" className="text-xl font-bold">
                Telefono:
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                placeholder="Inserisci il numero"
                value={formData.phone}
                onChange={(e) => handleField("phone", e.target.value)}
                className=" border border-slate-300 ml-3 px-2 py-1 w-full"
                required
              />
            </div>
            <div className="flex">
              <label htmlFor="taxCode" className="text-xl font-bold">
                CF:
              </label>
              <input
                type="text"
                id="taxCode"
                name="taxCode"
                placeholder="Inserisci il CF"
                minLength={"16"}
                maxLength={"16"}
                value={formData.taxCode}
                onChange={(e) => handleField("taxCode", e.target.value)}
                className=" border border-slate-300 ml-3 px-2 py-1 w-full"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className=" bg-amber-500 hover:bg-orange-300 text-white text-center text-xl rounded-xl px-4 py-2 cursor-pointer"
              >
                Aggiungi Partecipante
              </button>
            </div>
          </form>
        </section>
      </Container>
    </>
  );
}
