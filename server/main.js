import { Meteor } from 'meteor/meteor';
import '../imports/chat/chat.js';

Meteor.startup(() => {
  var express = require('express'),
  app = express(),
  http = require('http'),
  io = require('socket.io');

  // code to run on server at startup
});
