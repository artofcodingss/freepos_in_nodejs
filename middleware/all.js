var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var engine = require("ejs-locals");
var router = express.Router();
require("../db/conn");
const Users = require("../models/user");
const Contact = require("../models/contact");
const questions = require("../models/questions");