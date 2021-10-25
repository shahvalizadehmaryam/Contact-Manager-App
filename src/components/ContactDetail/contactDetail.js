const ContactDetail = ({ location }) => {
  const { contact } = location.state;
  return (
    <div>
      <p>user name is : {contact.name}</p>
      <p>user email is : {contact.email} </p>
    </div>
  );
};

export default ContactDetail;
