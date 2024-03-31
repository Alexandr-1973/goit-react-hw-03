import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";

const Contact = ({ contactInfo, onDeleteContact }) => {
  const { id, name, number } = contactInfo;
  return (
    <div className={css.contact}>
      <ul className={css["contact-info"]}>
        <li>
          <p className={css.item}>
            <IoPerson className={css.icon} />
            {name}
          </p>
        </li>
        <li>
          <p className={css.item}>
            <FaPhoneAlt className={css.icon} />
            {number}
          </p>
        </li>
      </ul>
      <button className={css.btn} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
