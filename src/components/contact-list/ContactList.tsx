import React, { useEffect, useState } from "react";
import "./ContactList.css";
import { ContactModel } from "../../models";
import ContactItemCard from "../contact-item-card/ContactItemCard";

const MOCK_USERS_URL = "https://randomuser.me/api/?results=50";

const ContactList = (props: { contacts: ContactModel[] }) => {
  const [query, setQuery] = useState("");
  const [originalContacts, setOriginalContacts] = useState(props.contacts);
  const [contacts, setContacts] = useState(originalContacts);

  const filterContacts = (e: any) => {
    const searchString = (e.target as HTMLInputElement)?.value;
    setQuery(searchString);
    if (!searchString) {
      setContacts(originalContacts);
    } else {
      setContacts(
        originalContacts.filter((contact) => {
          const { first, last } = contact.name;
          const contactName =
            (first ?? "").toLowerCase() + " " + (last ?? "").toLowerCase();
          return contactName.includes(searchString.toLowerCase());
        })
      );
    }
  };

  useEffect(() => {
    fetch(MOCK_USERS_URL)
      .then((res) => res.json())
      .then((data) => {
        setOriginalContacts(data.results);
        setContacts(data.results);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="contact-list-container">
        <input
          type="text"
          className="input-search"
          autoFocus
          placeholder="Search contact by name"
          value={query}
          onChange={(e) => filterContacts(e)}
        />
        {contacts.map((contact) => (
          <ContactItemCard contact={contact} key={contact.email} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ContactList;
