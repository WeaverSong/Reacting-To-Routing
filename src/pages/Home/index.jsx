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
const CenterH1 = styled.h1`
    text-align: center;
`;
const InfoBody = styled.p`
    padding: 10px;
    font-size: 1.4em;
`;

export default function Home ({setLocation}) {
    setLocation('Home');
    return (
        <InfoBox>
            <CenterH1>Reacting to Routing</CenterH1>
            <InfoBody>
                Sorry about the wallpaper problems. My device isn't the greatest, so I didn't think that it might cause performance issues, since I didn't encounter any.
                <br/><br/>
                Also, I know you mentioned that I had set things up in the last lab in such a way that it would make it easier for me in this one, but the instructions seemed to make it clear that I wasn't supposed to build off the previous lab, but rather make it completely anew.
            </InfoBody>
        </InfoBox>
    );
};