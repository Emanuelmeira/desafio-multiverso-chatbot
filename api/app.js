require('dotenv').load();
const express = require('express');
const bodyParser = require('body-parser');
const AssistantV1 = require('watson-developer-cloud/assistant/v1');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const assistant = new AssistantV1({
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    url: process.env.URL,
    version: process.env.VERSION,
});

const msgContext = {}
app.post('/conversation', (req, res) => {
    
    var text  = req.body.text;    

    const params = {
        input: { text },
        workspace_id:process.env.WORKSPACE_ID,
        context: this.msgContext,        
    };
    
    assistant.message(params, (err, response) => {
        if (err) {            
            res.status(500).json(err);
        } else {                        
            this.msgContext = response.context;            
            res.json(response.output.text);
        }
    }); 
});

app.listen(process.env.PORT, () => console.log(`Server online ${process.env.PORT}`));