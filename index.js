'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const https = require("https");
const { gql, ApolloServer } = require("apollo-server");
const { Neo4jGraphQL } = require("@neo4j/graphql");
const neo4j = require("neo4j-driver");
const { BreakingChangeType } = require('graphql');
require("dotenv").config();

const typeDefs = gql`
  type Movie {
    title: String!
    year: Int
    plot: String
    actors: [Person!]! @relationship(type: "ACTED_IN", direction: IN)
  }

  type Person {
    name: String!
    movies: [Movie!]! @relationship(type: "ACTED_IN", direction: OUT)
  }
`;

const driver = neo4j.driver(
    process.env.NEO4J_URI,
    neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

neoSchema.getSchema().then((schema) => {
    const server = new ApolloServer({
        schema: schema
    });

    server.listen().then(({ url }) => {
        //Default localhost:4000
        console.log(`GraphQL server ready on ${url}`);
    });
});

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.post('/theatro', (req, res) => {
    const intent = req.body.queryResult.intent.displayName;
    let dataToSend;

    switch (intent) {
        case 'recommendation':
            dataToSend = handleRecommendation();
            break;
        case 'search':
            dataToSend = handleSearch();
            break;
        default:
            dataToSend = 'Error';
    }
    console.log(req.body);

    return res.json({
        "fulfillmentMessages": [
            {
                "text": {
                    "text": [
                        dataToSend
                    ]
                }
            }
        ]
    });
});

server.listen((3000), () => {
    console.log("Server is up and running on http://localhost:3000/");
});



function handleRecommendation() {
    return 'recommendation';
}

function handleSearch() {
    return 'search';
}