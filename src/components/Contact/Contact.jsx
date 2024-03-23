/* eslint-disable react/prop-types */
import clsx from "clsx";
import css from "./Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <div className={clsx(css.contactBox)}>
      <ul className={clsx(css.contactList)}>
        <li className={clsx(css.contactItem)}>🧛‍♂️ {contact.name}</li>
        <li className={clsx(css.contactItem)}>📞 {contact.number}</li>
      </ul>
      <button
        className={clsx(css.contactButton)}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
