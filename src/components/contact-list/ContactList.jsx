import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ visibleContactList, deleteContact }) => {
  return (
    <ul className={css["contact-list"]}>
      {visibleContactList.map((contactInfo) => {
        return (
          <li key={contactInfo.id}>
            <Contact
              contactInfo={contactInfo}
              onDeleteContact={deleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
