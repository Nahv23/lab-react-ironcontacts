import React from 'react';
import ContactItem from  './ContactItem';

const ContactList = ({ contacts }) => (
    <tbody>
        {contacts.map((contact, index) => {
            return <ContactItem key={index} {...contact}/>
        })}
    </tbody>
)

export default ContactList;