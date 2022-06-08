'use strict';

const express = require('express');
const { gql, ApolloServer } = require("apollo-server");
const { Neo4jGraphQL } = require("@neo4j/graphql");
const neo4j = require("neo4j-driver");
const { BreakingChangeType } = require('graphql');
require("dotenv").config();
const handler = require('./handler.js');

const typeDefs = gql`
  type Prod {
    id: Int!
    genres: [String!]!
    originalTitle: String
    runtimeMinutes: Int
    startYear: Int
    tConst: String!
    title: String!
    titleType: [String!]!
    actors: [Person!]! @relationship(type: "ACTED_IN", direction: IN)
    directors: [Person!]! @relationship(type: "DIRECTED", direction: IN)
  }

  type Person {
    id: Int!
    name: String!
    tConst: String!
    birthYear: Int!
    deathYear: Int
    primaryProfession: [String!]!
    moviesActed: [Prod!]! @relationship(type: "ACTED_IN", direction: OUT)
    productions: [Prod!]! @relationship(type: "DIRECTED", direction: OUT)
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


server.get('*', (req, res) => {
    res.send("Everything Working! Send a POST to /theatro");
});

server.post('/theatro', async (req, res) => {
    const intent = req.body.queryResult.intent.displayName ?? '';
    const movies = req.body.queryResult.parameters.movie ?? [];
    const people = req.body.queryResult.parameters.person ?? [];
    const categories = req.body.queryResult.parameters.category ?? [];

    //Convert person object to string
    for (let i = 0; i < people.length; i++)
        people[i] = people[i].name;

    let msgToSend;

    switch (intent) {
        case 'recommendation':
            msgToSend = await handler.handleRecommendation(movies, people, categories);
            break;
        case 'information':
            msgToSend = await handler.handleSearch(movies, people);
            break;
        default:
            msgToSend = 'Error';
    }

    return res.json({
        "fulfillmentMessages": [
            {
                "text": {
                    "text": [
                        msgToSend
                    ]
                }
            }
        ]
    });
});

server.listen((process.env.PORT || 3000), () => {
    console.log("Server is up and running on http://localhost:3000");
});