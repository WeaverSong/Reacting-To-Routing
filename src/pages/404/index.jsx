import React from 'react';
import styled from 'styled-components';

const InfoBox = styled.div`
    width: 75%;
    background: white;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
    margin: 50px;
    box-shadow: 10px 10px 17px -5px rgba(0,0,0,0.75);
`;
const CH1 = styled.h1` text-align: center; `;

export default function NotFound () {
    return (
        <InfoBox>
            <CH1>Error 404. We're sorry, but that page isn't in the database.</CH1>
        </InfoBox>
    );
}