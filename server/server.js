let express = require('express');
let app = express();
// if on heroku, use the provided port || use 4001
const PORT = process.env.PORT || 4000;
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true})); 

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});