import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactLict/ContactLict";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";

const contactsArr = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem("contacts");
    if (!stringifiedContacts) return contactsArr;

    const parsedContacts = JSON.parse(stringifiedContacts);
    return parsedContacts;
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = (formData) => {
    const finalContacts = {
      ...formData,
      id: nanoid(),
    };

    setContacts((prevState) => [...prevState, finalContacts]);
  };

  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />

      <SearchBox filter={filter} onChangeFilter={onChangeFilter} />

      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
}

export default App;
