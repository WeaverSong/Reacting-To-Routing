import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import PersonDetails from './pages/People/Details';
import People from './pages/People';
import FilmDetails from './pages/Films/Details';
import Films from './pages/Films';
import LocationDetails from './pages/Locations/Details';
import Locations from './pages/Locations';
import Home from './pages/Home';
import NotFound from './pages/404';

import './App.css';

export default function App () {

    const [location, setLocation] = React.useState("");
    const [ready, setReady] = React.useState(false);
    const [films, setFilms] = React.useState(null);
    const [people, setPeople] = React.useState(null);
    const [locations, setLocations] = React.useState(null);

    React.useEffect(() => {
        Promise.all([fetch('https://ghibliapi.herokuapp.com/films'), fetch('https://ghibliapi.herokuapp.com/people'), fetch('https://ghibliapi.herokuapp.com/locations')])
        .then(value => {
            let fail = value.find(i => !i.ok);
            if (fail !== undefined) throw new Error("Fetch failed with code " + fail.status, fail.statusText);
            return Promise.all(value.map(v => v.json()));
        })
        .then(value => {
            value[1] = value[1].map(i => ({
                id: i.id,
                name: i.name,
                gender: i.gender,
                age: i.age,
                eye_color: i.eye_color,
                hair_color: i.hair_color,
                films: i.films.map(film => film.substring(38))
            }));

            value[2] = value[2].map(i => ({
                id: i.id,
                name: i.name,
                climate: i.climate,
                terrain: i.terrain,
                surface_water: i.surface_water,
                residents: i.residents.map(res => res.substring(39)).map(f => value[1].find(v => v.id === f)),
                films: i.films.map(film => film.substring(38))
            }));

            value[0] = value[0].map(i => ({
                id: i.id,
                title: i.title,
                original_title: i.original_title,
                original_title_romanised: i.original_title_romanised,
                description: i.description,
                director: i.director,
                producer: i.producer,
                release_date: i.release_date,
                running_time: i.running_time,
                rt_score: i.rt_score,
                people: value[1].filter(v => v.films.indexOf(i.id) !== -1),
                locations: value[2].filter(v => v.films.indexOf(i.id) !== -1)
            }));

            value[1].forEach(i => {
                i.films = i.films.map(f => 
                    value[0].find(v => v.id === f)
                )}
            )

            value[2].forEach(i => 
                i.films = i.films.map(f => 
                    value[0].find(v => v.id === f)
                )
            )

            value[1].forEach(i => 
                i.locations = value[2].filter(v => v.residents.find(r => r === i))
            )

            setFilms(value[0]);
            setPeople(value[1]);
            setLocations(value[2]);
            setReady(true);
        })
        .catch(e => {
            console.error(e);
            setReady(null);
        });

    }, []);

    if (ready === false) {
        return (
            <div className="Loading">
                <h1>Loading...</h1>
            </div>
        );
    } else if (ready === null) {
        return (
            <div className="Loading">
                <h1>Unable to load</h1>
            </div>
        );
    }

    return (
        <BrowserRouter>
            < Navbar location={location} />
            <Switch>
                <Route path="/people/:id">
                    < PersonDetails people={people} setLocation={setLocation} />
                </Route>
                <Route path="/people">
                    < People people={people} setLocation={setLocation} />
                </Route>
                <Route path="/films/:id">
                    < FilmDetails films={films} setLocation={setLocation} />
                </Route>
                <Route path="/films">
                    < Films films={films} people={people} locations={locations} setLocation={setLocation} />
                </Route>
                <Route path="/locations/:id">
                    < LocationDetails locations={locations} setLocation={setLocation} />
                </Route>
                <Route path="/locations">
                    < Locations locations={locations} setLocation={setLocation} />
                </Route>
                <Route exact path="/">
                    < Home setLocation={setLocation} />
                </Route>
                <Route path="*">
                    < NotFound setLocation={setLocation} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};