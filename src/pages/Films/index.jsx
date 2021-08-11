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
`;

const CH2 = styled.h2`
    text-align: center;
`;
const CH3 = styled.h3`
    text-align: center;
`;

const Desc = styled.p`
    margin: 10px;
`;

const Red = styled.span`
    color: red;
`;
const Green = styled.span`
    color: lime;
`;


export default function NotFound ({ films, setLocation }) {
    setLocation("Films")
    return (
        <FlexBox>
            {
                films.map(i => <Box key={i.id}>
                    <Link className="LinkTitle" to={"/films/" + i.id}>{i.title}</Link>
                    <Desc>{i.description}</Desc>
                    <CH3>Release Date: {i.release_date}</CH3>
                    <CH3>RT Score: {i.rt_score >= 75 ? <Green>{i.rt_score}</Green> : <Red>{i.rt_score}</Red>}</CH3>
                    <CH2>People in Database:</CH2>
                    {
                        i.people.map(i => <Link className="Link" key={i.id} to={`/people/${i.id}`}>{i.name}</Link>)
                    }
                    <CH2>Locations in Database:</CH2>
                    {
                        i.locations.map(i => <Link className="Link" key={i.id} to={`/locations/${i.id}`}>{i.name}</Link>)
                    }
                </Box>)
            }
        </FlexBox>
    );
}