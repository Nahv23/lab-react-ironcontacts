import React, {Component} from 'react';
import ContactItem from  './ContactItem';

import data from '../data/contacts.json';

class ContactList extends Component {

    constructor (props){
        super (props)

        this.state = {
            contacts: [...data].slice(0,5)
        }
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