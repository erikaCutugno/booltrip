import travels from "../data/travelData";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import Heading from "../components/ui/Heading";
import { useState } from "react";

const initialData = {
  destination: "",
  startDate: "",
  endDate: "",
};

export default function Homepage() {
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
    const id = travels[travels.length - 1].id + 1;
    const newTravel = {
      id,
      destination: formData.destination,
      startDate: formData.startDate,
      endDate: formData.endDate,
    };

    travels.push(newTravel);
    setFormData(initialData);
  };

  return (
    <>
      <Container size="sm">
        <div className="mt-9">
          <div className="my-10 text-slate-700">
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
          <section>
            <form
              onSubmit={handleSubmit}
              className="my-12 m-auto md:w-100  bg-white text-slate-700 space-y-6 p-4 rounded-xl "
            >
              <div className="flex">
                <label htmlFor="destination" className="text-xl font-bold">
                  Destinazione:
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  placeholder="Inserisci la destinazione"
                  value={formData.destination}
                  onChange={(e) => handleField("destination", e.target.value)}
                  className=" border border-slate-300 ml-3 px-2 py-1 w-full"
                  required
                />
              </div>
              <div className="flex">
                <label htmlFor="startDate" className="text-xl font-bold">
                  Dal:
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={(e) => handleField("startDate", e.target.value)}
                  className=" border border-slate-300 ml-3 px-2 w-full"
                  required
                />
              </div>
              <div className="flex">
                <label htmlFor="endDate" className="text-xl font-bold">
                  A:
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={(e) => handleField("endDate", e.target.value)}
                  className=" border border-slate-300 ml-3 px-2 w-full"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className=" bg-amber-500 text-white hover:bg-orange-300 text-center text-xl rounded-xl px-4 py-2 cursor-pointer"
                >
                  Aggiungi Viaggio
                </button>
              </div>
            </form>
          </section>
        </div>
      </Container>
    </>
  );
}
