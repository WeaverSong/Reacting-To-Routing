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

const CH2 = styled.h2`
    text-align: center;
`;

export default function People ({ people, setLocation }) {
    setLocation("People");
    console.log(people);

    return (
        <FlexBox>
            {
                people.map(i => <Box key={i.id}>
                    <Link className="LinkTitle" to={"/people/" + i.id}>{i.name}</Link>
                    <CH2>Gender: {i.gender}</CH2>
                    <CH2>Age: {i.age}</CH2>
                    <CH2>Related Films:</CH2>
                    {
                        i.films.map(i => <Link className="Link" key={i.id} to={`/films/${i.id}`}>{i.title}</Link>)
                    }
                    <CH2>Related Locations:</CH2>
                    {
                        i.locations.map(i => <Link className="Link" key={i.id} to={`/locations/${i.id}`}>{i.name}</Link>)
                    }
                </Box>)
            }
        </FlexBox>
    );
}