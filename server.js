const express = require('express');
const path = require('path');
const app = express();
// const http = require('http');

app.use(express.json());
app.use(express.static("express"));// default URL for website


app.get('/', function(req,res){
    res.sendFile(path.join(__dirname+'/express/index.html'));
    //__dirname : It will resolve to your project folder.
}); 
// const server = http.createServer(app);
const port =  process.env.port || 3000;
// server.listen(port);console.debug('Server listening on port ' + port);
app.listen(port, () => console.log(`app listening on port ${port}!`));