import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavStyled = styled.div`
    padding: 10px 50px;
    margin: 10px 0;
    background: white;
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    box-shadow: 10px 10px 20px 3px rgba(0,0,0,0.54);
`;


export default function Navbar ({location}) {
    return (
        <NavStyled>
            <Link className={location==="Home" ? "navButtonDisabled" : "navButton"} to="/">Go Home</Link>
            <Link className={location==="Films" ? "navButtonDisabled" : "navButton"} to="/films">View Films</Link>
            <Link className={location==="People" ? "navButtonDisabled" : "navButton"} to="/people">View People</Link>
            <Link className={location==="Locations" ? "navButtonDisabled" : "navButton"} to="/locations">View Locations</Link>
        </NavStyled>
    );
};