import React from 'react';
import { useParams, Link, useHistory } from 'react-router-dom'
import styled from 'styled-components';

const InfoBox = styled.div`
    width: 55%;
    background: white;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
    box-shadow: 10px 10px 17px -5px rgba(0,0,0,0.75);
    margin: 50px;
`;

const CH1 = styled.h1` text-align: center; `;
const CH2 = styled.h2` text-align: center; `;

const Pad = styled.div` text-align: center; margin: 10px;`;

const Error = styled.h2`
    color: red;
    text-align: center;
`;

export default function Details({locations, setLocation})
{

    let id = useParams().id;
    let location = locations.find(f => f.id === id);
    let past = useHistory();

    if (location === undefined)
    {
        return (
            <InfoBox>
                <CH1>No such location in the database</CH1>
                <Pad><Link className="navButton" onClick={past.goBack}>Back</Link></Pad>
            </InfoBox>
        );
    }
    setLocation("locations/" + location.id);

    return (
        <InfoBox>
            <CH1>{location.name}</CH1>
            <Pad>Id: {location.id}</Pad>
            <CH2>Climate: {location.climate}</CH2>
            <CH2>Terrain: {location.terrain}</CH2>
            <CH2>Surface water: {location.surface_water}</CH2>
            <CH2>Related People:</CH2>
            {
                location.residents.map(r => r === undefined ? <Error>TODO (That's literally what it says)</Error> : <Link className="Link" key={r.id} to={`/people/${r.id}`}>{r.name}</Link>)
            }
            <CH2>Related Films:</CH2>
            {
                location.films.map(r => r === undefined ? <Error>TODO (That's literally what it says)</Error> : <Link className="Link" key={r.id} to={`/films/${r.id}`}>{r.title}</Link>)
            }
            <Pad><Link className="navButton" onClick={past.goBack}>Back</Link></Pad>
        </InfoBox>
    );
}