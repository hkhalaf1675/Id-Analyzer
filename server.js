const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.status(200).json({success: true, message: 'test endpoint is running successfully'})
});

app.post('/docu-pass', (req, res) => {
    const {success, transactionId, customData} = req.body;
    console.log(`Success: ${success}`);
    console.log(`transication id: ${transactionId}`);
    console.log(`custom data: ${customData}`);
    if(success){
        return res.status(200).json({success});
    }
    else{
        return res.status(400).json({success});
    }
});

app.listen(3003, () => {
    console.log('Server is running successfully at port 3003');
})