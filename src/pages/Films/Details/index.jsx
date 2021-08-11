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
const CH3 = styled.h3` text-align: center; `;

const Desc = styled.p` margin: 10px; `;

const Red = styled.span` color: red; `;
const Green = styled.span` color: lime; `;
const Pad = styled.div` text-align: center; margin: 10px;`;

export default function FilmDetails({ films, setLocation })
{

    let id = useParams().id;
    let film = films.find(f => f.id === id);
    let past = useHistory();

    if (film === undefined)
    {
        return (
            <InfoBox>
                <CH1>No such film in the database</CH1>
                <Pad><Link className="navButton" onClick={past.goBack}>Back</Link></Pad>
            </InfoBox>
        );
    }
    setLocation("films/" + film.id)

    return (
        <InfoBox>

            <CH1>{film.title}</CH1>
            <CH2>Original Title: {film.original_title}</CH2>
            <CH2>Orignal Title (Romanized): {film.original_title_romanised}</CH2>
            <Pad><Desc>Id: {film.id}</Desc></Pad>
            <Desc>{film.description}</Desc>
            <CH3>Director: {film.director}</CH3>
            <CH3>Producer: {film.producer}</CH3>
            <CH3>Release Date: {film.release_date}</CH3>
            <CH3>Running time: {Math.floor(film.running_time / 60) + (Math.floor(film.running_time / 60) > 1 ? " hours" : "hour") +  " and " + film.running_time % 60 + (film.running_time % 60 > 1 ? " minutes" : "minute")}</CH3>
            <CH3>RT Score: {film.rt_score >= 75 ? <Green>{film.rt_score}</Green> : <Red>{film.rt_score}</Red>}</CH3>
            <CH2>People in Database:</CH2>
            {
                film.people.map(film => <Link className="Link" key={film.id} to={`/people/${film.id}`}>{film.name}</Link>)
            }
            <CH2>Locations in Database:</CH2>
            {
                film.locations.map(film => <Link className="Link" key={film.id} to={`/locations/${film.id}`}>{film.name}</Link>)
            }

            <Pad><Link className="navButton" onClick={past.goBack}>Back</Link></Pad>

        </InfoBox>
    );
}