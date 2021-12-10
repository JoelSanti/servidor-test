require('dotenv').config({path:'variables.env'})

//const {default:axios} = require('axios');

const express = require("express")
const dialogflow = require("@google-cloud/dialogflow")
//const Path = require("path")
const router = express.Router();
//const { uuid } = require('uuidv4');
//
const {WebhookClient} = require('dialogflow-fulfillment');

const { v4: uuidv4 } = require('uuid');

  const projectId = process.env.PROJECT_ID
  //const sessionId = process.env.DIALOGFLOW_ID_SESION
  const sessionId = uuidv4();
  // Create a new session
  const lenguaje = process.env.DIALOGFLOW_LANGUAJE_SESION
//
//
  const sessionClient = new dialogflow.SessionsClient();
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );


router.post("/text", async (req, res) => {
 
  // A unique identifier for the given session

console.log(req.body)
  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        // The query to send to the dialogflow agent
        text: req.body.text,
        // The language used by the client (en-US)
        languageCode: lenguaje,
      },
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);

    res.send(result)
});


router.post("/event", async (req, res) => {
 
  // A unique identifier for the given session

console.log(req.body)
  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      event: {
        // The query to send to the dialogflow agent
        name: req.body.event,
        // The language used by the client (en-US)
        languageCode: lenguaje,
      }, 
    },
  };

  // Send request and log result
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);

    res.send(result)
});

'use-strict';

router.post("/webhook",(req,res) => {

 const agent = new WebhookClient({ request:req, response:res});

    function guardarInfoPersonal(agent){
	agent.add("alalalalalalalalal");
    }

  let intentMap = new Map();
  intentMap.set('Bienvenido a la web', guardarInfoPersonal); 
  agent.handleRequest(intentMap);

});

module.exports = router;


