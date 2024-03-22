// import { useEffect, useState } from "react";
import { useState } from "react";

// import ContactForm from "./components/ContactForm/ContactForm";
import SearchBar from "./components/SearchBar/SearchBar";
import ContactList from "./components/ContactLict/ContactLict";
import "./App.css";

const contacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contacts");
    if (!stringifiedContacts) return contacts;

    const parsedContacts = JSON.parse(stringifiedContacts);
    return parsedContacts;
  });

  const [filter, setFilter] = useState("");

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  // const filteredUsers = users.filter(
  //   (user) =>
  //     user.userName.toLowerCase().includes(filter.toLowerCase()) ||
  //     user.userEmail.toLowerCase().includes(filter.toLowerCase())
  // );
  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      {/* <SearchBox /> */}
      <SearchBar filter={filter} onChange={onChangeFilter} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
