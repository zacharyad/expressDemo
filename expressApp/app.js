// THIS IS OUR SIMPLE SERVER
const express = require("express");
const app = express();

// Create - Read - Update - Delete



app.use("/cats", (req, res) => {
  // do some stuff this 
})

app.get("/", (req, res) => res.send("Did we just set up a server?!?!?!?!"));

app.get("/cake", (req, res) => {
  console.log("hey its cake time");
  res.send("<h1>Howdy its cake time</h1>")
  //stops
})


app.get("/cake/:msg", (req, res) => {
  let messageFromClient = req.params.msg
  // We are just taking the "message we find" in req.params.msg and sending it back to the client as a response. The console.log shows up in the backend, not the front end.
  console.log(messageFromClient)
  res.send(messageFromClient)
})

app.get("/pizza/:id", (req, res) => {
  let messageFromClient = req.params.id // /pizza/9 req.paramsid === 9
  //Go to the DB and fine that id for that pizza that matches and send it back.

  console.log(messageFromClient)
  res.send(messageFromClient)
})

app.post("/cake",(req, res) => {
  let bodyOfForm = req.body;
  // Make a new cake in the DB with all these column data bits 

} )

app.get("*", (req, res, next) => {
  //do some stuff, logging things,
  // This could be a 404
  res.send("/404.html")
})



// This is the port we are "opening up" to the interet (*** WELL..... not really availbe to the internet in this case, but it is available on your machine via localhost:<portnumber>)
const PORT = 1337;
// This is the method on 'app' that starts out server
app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});


/*
This is a basic server
  __ IN THIS LECTURE __
  - We spoke about the relationship between the CLIENT, the SERVER, and the DATABASE.
  - We looked at and spoke about curl, Postman (mentioned insomnia), and some API's.

  __ FOR THESE FILES __
  - This is a bare bones express server. Lets talk about it and add to it.

  1) How is this server different or the same as ones your have heard about.
  2) What is going on with this structure and syntax?
  3) What is req and res? does this connect to the CLIENT>SERVER>DATABASE diagram from before?
  4) What is this app variable we are using?
    - What are some things we can "dot off of" in the variable `app`?

  5) Lets talk about C.R.U.D operations and how that connects to express routes you will use.
    - What data would you need for each operation??????
    - How do we get that data? 

  6) Lets make a route to deliver a message for a specified endpoint.
  7) Lets Make a route with a "wildcard" added to the previous route
    - why would we want/need this?
    - Are there other ways of getting info from the client in our server routes?

  8) Can we access other routes with something, say, like middleware.....? 
    - What is middleware when talking about express servers?
    - Is there another parameter after req, res that express gives us?

  __extra info__
  ) What does `*` do as an endpoint in the server.
    - When might this we useful and how would you need to use it?

__ LECTURE TAKEAWAYS FROM YOU ALL __
  -




*/
