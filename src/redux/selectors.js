export const selectContacts = (state) => state.contacts.contacts;
export const selectFilteredContacts = (state) => {
  const contacts = selectContacts(state);
  const filter = state.filter.name.toLowerCase();

  return contacts.filter((contact) => contact.name.toLowerCase().includes(filter));
};
