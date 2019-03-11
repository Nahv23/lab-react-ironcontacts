import React, {Component} from 'react';
import ContactItem from  './ContactItem';

import data from '../data/contacts.json';

class ContactList extends Component {

    constructor (props){
        super (props)

        this.state = {
            allContacts: [...data],
            contacts: [...data].slice(0,5),
            shortBy: undefined
        }
    }
    
    addRandomContact = () => {
        const otherContacts = this.state.allContacts.filter(contact => !this.state.contacts.some(c => c === contact));
        const randContact = otherContacts[Math.floor(Math.random() * otherContacts.length)];

        this.setState({
            contacts: [...this.state.contacts, randContact]
          })
      }
      
    render (){
    
        console.log(this.state.contacts);


        return(
            <tbody>
                {this.state.contacts.map((contact, index) => {
                    return <ContactItem key={index} {...contact}/>
                })}
            </tbody>
        )

    }
}

export default ContactList;