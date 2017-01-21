//server will live here
const http = require('connect');
const app = connect();

function logger (req,res,next){
  console.log(req.method, req.url);

  next();
};

function helloWorld(req,res,next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');

};

function goodbyeWorld(req,res,next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Good Bye World');
  
};

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);
app.listen(3000);

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});