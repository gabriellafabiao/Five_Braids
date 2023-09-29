const express = require("express");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(12);
var dbConnection = require ("../../config/database");

const{ body, validationResul} =
require("express-validator");

const router = express.Router();