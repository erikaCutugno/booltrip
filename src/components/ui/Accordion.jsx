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
    <div className="w-100 m-auto bg-slate-200 rounded-xl shadow-xl mb-6">
      <div
        className="flex justify-between bg-amber-500 text-white rounded-t-xl px-6 py-4 font-bold text-xl cursor-pointer"
        onClick={isToggle}
      >
        <div className="flex gap-2">
          <div>{firstName}</div>
          <div> {lastName}</div>
        </div>
        <button className="pr-2">{isOpen ? "-" : "+"}</button>
      </div>

      {isOpen && (
        <ul className="py-4 space-y-2 px-6 text-lg text-slate-700">
          <li>
            <a href="#">
              {" "}
              <strong>Email: </strong>
              <span className="underline hover:text-slate-500">{email}</span>
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <strong>Telefono:</strong>{" "}
              <span className="underline hover:text-slate-500">{phone}</span>
            </a>
          </li>
          <li>
            <strong>Codice fiscale:</strong> {taxCode}
          </li>
        </ul>
      )}
    </div>
  );
}
