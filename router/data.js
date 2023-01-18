const express = require('express')
const server = require('../output')

const datarouter=express.Router();

datarouter.route("/home")
.get(server.apiData);

module.exports=datarouter;