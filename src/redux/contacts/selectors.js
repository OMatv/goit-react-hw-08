import { createSelector } from "@reduxjs/toolkit";

export const selectAllContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;
export const selectNameFilter = (state) => state.filters.filter;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectNameFilter],
  (contacts, nameFilter) => {
    const normalizedFilter = nameFilter ? nameFilter.toLowerCase() : "";
    return contacts.filter((contact) => {
      const normalizedContactName = contact.name
        ? contact.name.toLowerCase()
        : "";
      return normalizedContactName.includes(normalizedFilter);
    });
  }
);
