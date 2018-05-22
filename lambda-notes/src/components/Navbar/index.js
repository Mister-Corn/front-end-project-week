// React
import React from 'react';
// Components
import { Button, RLink } from '../Button';
// CSS
import './Navbar.css';

const Navbar = (props) => {
    const { classes } = props;
    return (
        <div className={`navbar ${classes}`}>
            <h1>Lambda<br/>Notes</h1>
            <RLink to="/"><Button>View Your Notes</Button></RLink>
            <RLink to="/new"><Button>+ Create New Note</Button></RLink>
        </div>
    );
}

export default Navbar;