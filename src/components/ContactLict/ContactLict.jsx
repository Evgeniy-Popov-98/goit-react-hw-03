/* eslint-disable react/prop-types */
import clsx from "clsx";
import css from "./ContactLict.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={clsx(css.contactsList)}>
      {Array.isArray(contacts) &&
        contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
    </ul>
  );
};

export default ContactList;
