import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        type: "personal",
        name: "Ziba Hus",
        email: "ziba@gmail.com",
        phone: "6404981",
      },
      {
        id: 2,
        type: "personal",
        name: "Ziba Zadi",
        email: "zadi@gmail.com",
        phone: "4204981",
      },
      {
        id: 3,
        type: "professional",
        name: "Michael Zadikowitsch",
        email: "micha@gmail.com",
        phone: "9104123981",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contac

  // Delete Contact

  // Set Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
