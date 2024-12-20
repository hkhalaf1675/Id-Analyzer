const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.status(200).json({success: true, message: 'test endpoint is running successfully'})
});

app.post('/docu-pass', (req, res) => {
    const {decision, transactionId, customData} = req.body;
    console.log(`----------------------`);
    console.log(req.body);
    if(decision && decision === 'accept'){
        console.log('success ....');
        
        return res.status(200).json({decision});
    }
    else{
        console.log('fail ....');

        return res.status(400).json({decision});
    }
});

app.listen(3003, () => {
    console.log('Server is running successfully at port 3003');
})