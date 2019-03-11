import React from 'react';


const ContactItem = (props) => {

    return (

        <tr>
            <td><img src={props.pictureUrl} alt={props.name} className="img-thumbnail" style={{ maxWidth: "100px" }}/></td>
            <td style = {{padding:"20px"}}>{props.name}</td>
            <td>{props.popularity.toFixed(2)}</td>
            <td><button className="button is-small is-danger is-hovered is-focused"  onClick={props.onClickDelete}> X </button></td>
        </tr>
    )
  }


export default ContactItem;