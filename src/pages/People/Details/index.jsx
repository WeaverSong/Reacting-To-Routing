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

export default function Details({ people, setLocation })
{

    let id = useParams().id;
    let person = people.find(f => f.id === id);
    let past = useHistory();

    if (person === undefined)
    {
        return (
            <InfoBox>
                <CH1>No such person in the database</CH1>
                <Pad><Link className="navButton" onClick={past.goBack}>Back</Link></Pad>
            </InfoBox>
        );
    }
    setLocation("people/" + person.id)

    return (
        <InfoBox>
            <CH1>{person.name}</CH1>
            <Pad>Id: {person.id}</Pad>
            <CH2>Gender: {person.gender}</CH2>
            <CH2>Age: {person.age}</CH2>
            <CH2>Eye color: {person.eye_color}</CH2>
            <CH2>Hair color: {person.hair_color}</CH2>
            <CH2>Related Films:</CH2>
            {
                person.films.map(person => <Link className="Link" key={person.id} to={`/films/${person.id}`}>{person.title}</Link>)
            }
            <CH2>Related Locations:</CH2>
            {
                person.locations.map(i => <Link className="Link" key={i.id} to={`/locations/${i.id}`}>{i.name}</Link>)
            }
            <Pad><Link className="navButton" onClick={past.goBack}>Back</Link></Pad>
        </InfoBox>
    );
}