import React, { useState } from "react";

function Contact() {
  const [contacts, setContacts] = useState([
    {
      name: "Akshara Sunny",
      mobile: "",
      email: "aksharasunny83@gmail.com",
    },
    {
      name: "Archana R M",
      mobile: "",
      email: "archanaraji2001@gmail.com",
    },
    {
      name: "Athmaja A L",
      mobile: "",
      email: "athmajaal@gmail.com",
    },
  ]);
  return (
    <div className="flex flex-col">
      <h2 className="text-4xl font-semibold">Contacts</h2>
      <section className=" flex flex-col items-center gap-6 py-3 mt-24 md:mt-0">
        {contacts.map((details, i) => {
          return (
            <div key={i} className=" flex flex-col gap-1 items-center text-lg ">
              <p className="font-semibold">{details.name}</p>
              <div className="flex gap-2">
                Phone NO : <p className="font-semibold">{details.mobile}</p>
              </div>
              <div className="flex gap-2">
                Email : <p className="font-semibold"> {details.email}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Contact;
