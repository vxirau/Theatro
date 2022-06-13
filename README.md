<p align="center">
  <img src="/documentation/images/robot.png" height="70px">
</p>
<h1 align="center">Theatro</h1>

<p align="center">
  <a href="https://nodejs.org">
    <img src="https://img.shields.io/badge/node.js-17.8-orange">
  </a>
  <a href="https://github.com/VXGamez/Theatro/tree/main/LICENSE">
    <img src="https://img.shields.io/badge/License-BSD%203-lightgrey.svg">
  </a>
  <a href="https://github.com/VXGamez/Theatro/tree/main">
    <img src="https://img.shields.io/badge/Development Stage-blue.svg">
  </a>
  <a href="https://opensource.org/licenses/BSD-3-Clause">
    <img src="https://img.shields.io/badge/Open%20Source-%E2%9D%A4-brightgreen.svg">
  </a>
</p>

<p align="center">
    A Telegram Movie and TV-Show Chatbot built using Dialogflow and Neo4J
</p>

## Introduction

Contemporary chat ChatBots are easy to use and have the ability to simulate human conversations. However, they cannot evaluate large data sets to provide a response to the user. Instead, we have many free APIs that contain this data and can offer it given a number of parameters. In this we designed a server capable of listening to DialogFlow and processing them using a Graph database to improve the user experience and provide a higher volume of information than usual to the client. Using Google Dialogflow we analyze and GraphQL translates the Cypher query to request our Neo4J database, which analyzes and provides an accurate answer using a complete dataset and simulates a human-like conversation. Use the database to provide accurate answers using a response dataset and Google Dialogflow to simulate human interactions.

If you wish to know more we wrote an entire article detailing how it works. It can be found on the documentation folder.

To use it visit: [Theatro](t.me/TheatroBot)

## API

We can see how he interacts with Telegram here, but it will talk to DialogFlow which, in turn, will also ask the webhook, hosted on Heroku. This server will handle the DialogFlow request, convert it to GraphQL and then to Cypher, and request our Neo4J database hosted on a VM in GoogleCloud.

<p align="center">
  <img src="/documentation/images/architecture.png" height="150px">
</p>

## Example

Here is a practical example to see how the TV-Chatbot works:

> **User:** Hello!

> **Theatro:** <br>Good day! What can i do for you today? 🎥⭐️

> **User:** What do you know about star wars?

> **Theatro:** <br>Star Wars is Action, Adventure and Fantasy movie produced by George Lucas in 197. It lasts 121 minutes and its most well-known actors are Carrie Fisher and Harrison Ford <br><img src="/documentation/images/exampleImages/starwars.jpg" height=250px><br>

> **User:** Give me information about Steven Spielberg

> **Theatro:** <br><strong>Steven Spielberg</strong> <br> Steven Spielberg (1946) is an American film director, producer, and screenwriter <br><img src="/documentation/images/exampleImages/spielberg.jpg" height=250px><br>

> **User:** Great! Thank you! Have a nice day!

> **Theatro:** Bye! I hope to see you soon 🤙

## How to Run it

The bot is currently hosted on Google Cloud and you can talk to it by visiting [Theatro](https://t.me/TheatroBot).

If it's not working, you can run it yourself (don't do it unless it's not working). You need to have Node & npm installed in your system and:

```bash
#Clone the repository
git clone https://github.com/VXGamez/Theatro.git

#Install the npm packages
npm install

#Start it
npm start

#Visit https://t.me/SBC_TvChatBot to talk to the bot
```
