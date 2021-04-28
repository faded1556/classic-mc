// include dependencies
var express = require("express");
var prox = require("http-proxy-middleware");
let cache = require("apicache");

// proxy middleware options
var options = {
  target: "https://classic.minecraft.net/", // the target aka the site
  changeOrigin: true, // needed for virtual hosted sites
  ws: true // proxy websockets
};

// create the proxy (without context)
var exampleProx = prox(options);

// mount `exampleProxy` in web server
var app = express();
app.use("/", exampleProx);
app.listen(3000);
