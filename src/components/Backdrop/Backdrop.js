import React from 'react';
import './Backdrop.css';

const Backdrop = props => (
    <div className="backdrop" onClick={props.backdropClickHandler}></div>
);

export default Backdrop;