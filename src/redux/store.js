import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice";
import authReducer from "./auth/slice";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// // } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import filtersReducer from "./filters/filtersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: contactsReducer,
  },
});
