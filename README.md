# NLP News Evaluator
![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)

## Introduction
This is a tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

## About Natural Language Processing

NLP is a subset of AI that provides computers ability to process or interact with natural human speech. In NLP, machine learning and deep learning are used on massive amounts of data to obtain the rules and understanding of nuance in human speech. 

## Live Demo

To test the last build of the app that is deployed to Heroku, click on this [link](https://npl-evaluater.herokuapp.com/)

## Installation
- Clone the repository
- Navigate to the root folder
- Run the command `npm install` to download all the required packages
- Run the command `npm start` to start the local server (port 8081)
- Run the command `npm run build-dev` to start the development environment build
- Create a new file names `.env`, add API_KEY=xxxxxxxxx with your own meaningcloud API key

## Features
- The project has webpack `development` and `production` envronments
- Each environment has its own loaders, plugins and configuration
- The app sends the entered URL to meaningcloud API to analyze it
- Analysis values appear in the page DOM
- The app validates the URL using Regex pattern
- The app has 2 unit tests, to test run `npm run test`
- The app features service workers to support offline mode



### Technology Used
- HTML
- SASS
- Vanilla Javascript
- meaningcloud API
- Node.js/Express
- webpack with mutiple loaders and plugins
- jest library for unit testing
- Heroku for hosting the live demo

### License
The project is released under [MIT](https://github.com/RamiB1234/evaluate-news-NLP/blob/master/LICENSE) License