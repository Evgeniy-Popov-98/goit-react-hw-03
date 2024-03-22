import clsx from "clsx";
import css from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <div className={clsx(css.contactBox)}>
      <ul className={clsx(css.contactList)}>
        <li className={clsx(css.contactItem)}>{name}</li>
        <li className={clsx(css.contactItem)}>{number}</li>
      </ul>
      <button className={clsx(css.contactButton)} type="button">
        Delete
      </button>
    </div>
  );
};

export default Contact;
