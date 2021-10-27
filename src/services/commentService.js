import http from "./httpService";
export const getContacts = () => {
  return http.get("/contacts");
};
export const deleteContact = (id) => {
  return http.delete(`/contacts/${id}`);
};
export const addContact = (contact) => {
  return http.post(`/contacts`, contact);
};
export const getOneContact = (id) => {
  return http.get(`/contacts/${id}`);
};
export const updateContact = (contact,id) => {
  return http.put(`/contacts/${id}`,contact);
};

export default http;
