import axios from "axios";
import { useEffect, useState } from "react";
import Contact from "../Contact/contact";

const ContactList = () => {
  const [contactList, setContactList] = useState(null);
  useEffect(() => {
    getContactsList();
  }, []);
  const getContactsList = () => {
    axios.get("http://localhost:3001/contacts").then((res) => {
      setContactList(res.data);
    });
  };
  const deleteContactHandler = (id) => {
    axios
      .delete(`http://localhost:3001/contacts/${id}`)
      .then((res) => getContactsList())
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h3>Contact List</h3>
      {contactList &&
        contactList.map((contact) => (
          <Contact
            contact={contact}
            key={contact.id}
            onDelete={() => deleteContactHandler(contact.id)}
          />
        ))}
    </div>
  );
};

export default ContactList;
