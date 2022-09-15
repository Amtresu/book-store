import React from "react";
import PropTypes from 'prop-types';

const Book = (props) =>{
    return(
    <div>
        <p> Author:{props.title}</p>
        <p> Title:{props.author}</p>
        <button type="button" key={props.id}>Remove</button>
    </div>
    )
}

export default Book