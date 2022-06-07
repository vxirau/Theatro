'use strict';
const fetch = require('node-fetch');

exports.handleRecommendation = function (movies, people, categories) {
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

exports.handleSearch = function (movies, people) {
    return 'search';
}