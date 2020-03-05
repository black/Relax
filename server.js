const express = require('express'), 
    bodyParser =require('body-parser'),
    app = express();

app.use(express.static('public'));

let server = app.listen(2048, () => {
    console.log("Relax...2048"); 
});

// set up view engine
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
}) 