<p align="center">
  <img src="/documentation/images/robot.png" height="70px">
</p>
<h1 align="center">Theatro</h1>

<p align="center">
  <a href="https://nodejs.org">
    <img src="https://img.shields.io/badge/node.js-17.8-orange">
  </a
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
    A Telegram Movie and TV-Show Chatbot built using Dialogflow and Grakn’s knowledge graph
</p>

## Introduction


To use it visit: [Theatro](t.me/TheatroBot)

## API

Vaya show serà explicar això:

Telegram -> DialogFlow -> Hasura -> AWS -> Hasura -> DialogFlow -> Telegram

:)

## Example

Here is a practical example to see how the TV-Chatbot works:

> **User:** Hello my name is Carlos!

> **TV Chatbot:** Hey!! What a joy to see you here! 😃

> **User:** Recommend me a TV show streamed in Netflix please!

> **TV Chatbot:** <br><br><img src="/media/movies/movie2.jpg" height=250px><br><br>
> ☉ <b><u>Sacred Games</u></b><br><br> <i>2018 - 2 Seasons</i><br><br>
> ❝A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm.❞<br><br>
> ✳️ 18+ • 🕑 50min • ⭐ 8.6/10<br><br>

> **User:** Can you recommend me a movie now streamed in HBO max?

> **TV Chatbot:** <br><br><img src="/media/movies/movie1.jpg" height=250px><br><br>
> ☉ <b><u>The Warning</u></b> <b>(2018)</b><br><br>
> ❝Ten-year-old Nico receives a threatening letter and now his life is in danger. No one seems to believe him except one person that he doesn't know.❞<br><br>
> ✳️ 18+ • 🕑 93min • ⭐ 5.9/10

> **User:** Goodbye!

> **TV Chatbot:** Bye! I hope to see you soon 🤙

## How to Run it

The bot is currently hosted on Google Cloud and you can talk to it by visiting [TvChatbot](https://t.me/SBC_TvChatBot).

If it's not working, you can run it yourself (don't do it unless it's not working). You need to have Node & npm installed in your system and:

```bash
#Clone the repository
git clone https://github.com/VXGamez/TV-Chatbot.git

#Install the npm packages
npm install

#Start it
npm start

#Visit https://t.me/SBC_TvChatBot to talk to the bot
```
