import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

let FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 50px;
    justify-content: center;
`;
let Box = styled.div`
    width: 500px;
    background-color: white;
    border: 2px solid black;
    border-radius: 10px;
    box-shadow: 10px 10px 17px -5px rgba(0,0,0,0.75);
    margin: 20px;
    padding: 20px;
`;

const CH2 = styled.h2` text-align: center; `;
const Error = styled.h2`
    color: red;
    text-align: center;
`;

export default function Locations({ locations, setLocation })
{
    setLocation("Locations");

    return (
        <FlexBox>
            {
                locations.map(l => <Box key={l.id}>
                    <Link className="LinkTitle" to={"/locations/" + l.id}>{l.name}</Link>
                    <CH2>Related People:</CH2>
                    {
                        l.residents.map(r => r === undefined ? <Error>TODO (That's literally what it says)</Error> : <Link className="Link" key={r.id} to={`/people/${r.id}`}>{r.name}</Link>)
                    }
                    <CH2>Related Films:</CH2>
                    {
                        l.films.map(r => r === undefined ? <Error>TODO (That's literally what it says)</Error> : <Link className="Link" key={r.id} to={`/films/${r.id}`}>{r.title}</Link>)
                    }
                </Box>)
            }
        </FlexBox>
    );
}