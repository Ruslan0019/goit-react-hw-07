/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/operations";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={() => dispatch(deleteContact(contact.id))} />
      ))}
    </ul>
  );
};

const ContactItem = ({ contact, onDelete }) => {
  return (
    <li>
      <span>
        {contact.name} - {contact.number}
      </span>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default ContactList;
