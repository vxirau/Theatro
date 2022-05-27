// import { graphqlHTTP } from "express-graphql";
// import { buildSchema } from "graphql";
const express = require('express');
var ag = require('@bitnine-oss/ag-driver');
const app = express();


// const schema = buildSchema(`
//       type Image {
//         id: Int
//         title: String
//         category: String
//         owner: String
//         url: String
//       }
// `);

// const root =[];


var config = {
    user: 'victorxirauguardans',
    password: '',
    database: 'imdb',
    host: '127.0.0.1',
    port: 5432
};

const client = new ag.Client(config);





//client.end();

// app.use(
//   "/movieInfo",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
//   })
// );


//http://localhost:4000/get-details

app.post('/get-details', async (req, res) => {

    var resposta = "ni flowers ermano";
    await client.connect()
    try{
        await client.query('SET graph_path = imdb_graph'); //set graph path to gpt
        resposta = await client.query("MATCH (p:Person) RETURN p LIMIT 1");
        console.log(resposta);
    }catch (err) {
        console.log(err);
        resposta = err;
    }
    client.end();
    return res.json({
        "fulfillmentMessages": resposta});
});

//Listening to our server
app.listen(4000, () => {
  console.log("GraphQL server with Express running on localhost:5000/graphql");
});