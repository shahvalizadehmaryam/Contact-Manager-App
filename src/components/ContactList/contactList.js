import axios from "axios";
import { useEffect, useState } from "react";
import Contact from "../Contact/contact";

const ContactList = () => {
  const [contactList, setContactList] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:3001/contacts").then((res) => {
      setContactList(res.data);
    });
  }, [contactList]);
  return (
    <div>
      <h3>Contact List</h3>
      {contactList &&
        contactList.map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))}
    </div>
  );
};

export default ContactList;
