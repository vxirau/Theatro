'use strict';
const fetch = require('node-fetch');

exports.handleRecommendation = async function (movies, people, categories) {
    const query = `query {
        movies (
            where: { title: "What Dreams May Come" }
        ) {
            title
            actors (where: { name_NOT: null }) { 
                name
            }
            actorsConnection { 
              totalCount
            }
        }
    }`

    const response = fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            query
        })
    }).then(res => res.text()).then(text => {
        console.log(text);
        return text;
    });
}


exports.handleSearch = async function (productions, people) {
    //We'll get the first movie or the first person we found, and search for data
    if (productions.length === 0 && people.length === 0) {
        return "Sorry, I can't search that!";
    }

    if (productions.length !== 0) {
        //Query a random production introduced
        let query =
            `query {
            prods (
                where: { title: "${productions[Math.floor(Math.random() * productions.length)]}" }
                options: {limit: 1}
            ) {
                title
                genres
                runtimeMinutes
                startYear
                titleType
                actors {
                    name
                }
                directors {
                    name
                }
            }
        }`;

        const response = await fetch('http://localhost:4000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                query
            })
        });

        const jsonResponse = await response.json();
        return buildProductionSearchResponse(jsonResponse.data.prods[0]);
    }

    if (people.length !== 0) {
        //Query a random person introduced
        let query =
            `query {
            people (
                where: { name: "${people[Math.floor(Math.random() * people.length)]}" }
                options: {limit: 1}
            ) {
                name
                birthYear
                deathYear
                primaryProfession
                moviesActed  (options: {limit: 3} ){
                    title
                }
                productions (options: {limit: 3} ) {
                    title
                }
            }
        }`;

        const response = await fetch('http://localhost:4000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                query
            })
        });

        const jsonResponse = await response.json();
        return buildPersonSearchResponse(jsonResponse.data.people[0]);
    }
}


function buildRecommendationResponse(recommendation) {

}

function buildProductionSearchResponse(production) {
    console.log(JSON.stringify(production));
    return production.title + production.genres;
}

function buildPersonSearchResponse(person) {
    console.log(JSON.stringify(person));
    return person.name + person.birthYear;
}