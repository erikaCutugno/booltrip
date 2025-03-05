import { useState } from "react";

export default function Accordion({
  firstName,
  lastName,
  email,
  phone,
  taxCode,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const isToggle = () => {
    setIsOpen((current) => !current);
  };
  return (
    <div className="max-w-100 m-auto bg-neutral-200 rounded-xl shadow mb-6">
      <div
        className="flex justify-between bg-amber-400 px-6 py-4 font-bold text-xl cursor-pointer"
        onClick={isToggle}
      >
        <div className="flex gap-2">
          <div>{firstName}</div>
          <div> {lastName}</div>
        </div>
        <button className="pr-2">{isOpen ? "-" : "+"}</button>
      </div>

      {isOpen && (
        <ul className="py-4 space-y-2 px-6 text-lg">
          <li>
            <a href="#"> Email: {email}</a>
          </li>
          <li>
            <a href="#"> Telefono: {phone}</a>
          </li>
          <li>Codice fiscale: {taxCode}</li>
        </ul>
      )}
    </div>
  );
}
