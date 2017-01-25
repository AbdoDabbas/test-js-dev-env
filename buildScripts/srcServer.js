import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';

/* eslint-disable no-console */

const port = 3005;
const app = express();

const compiler = webpack(config);
const webpackMiddleware = require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
});

app.use(webpackMiddleware);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port, function(err){
  if(err){
    console.log(err);
  } else {
    open('http://localhost:'+port);
  }
});
