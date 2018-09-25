'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const { dialogflow } = require('actions-on-google');

const app = dialogflow();

const sayMyNameIntent = require('./intents/sayMyName');
const saveToDoTask = require('./intents/saveToDoTask');


/** Adds Intent-name & callback key value pairs to app */
function addIntents(...args) {
    for (let i = 0; i < args.length; i++) {
        for (const key in args[i]) {
            if (args[i].hasOwnProperty(key)) app.intent(key, args[i][key]);
        }
    }
}

addIntents(
    saveToDoTask,
    sayMyNameIntent
);

app.intent('welcomeIntent', (conv) => {
    conv.ask('Welcome to do list. What is your name?');
});




var port = process.env.PORT || 5000;

express().use(bodyParser.json(), app).listen(port);


