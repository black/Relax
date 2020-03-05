const express = require('express'),
    walk = require('walk'),
    bodyParser =require('body-parser'),
    app = express(),
    ALLfiles = [];

app.use(express.static('public'));

let server = app.listen(2048, () => {
    console.log("Relax...2048");
    //getAllfiles();
});

// set up view engine
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
})
/*
app.get('/:imgtag', (req, res) => {
    let typeImg = req.params.imgtag;
    console.log(typeImg);
    res.statusCode = 302;
    if (typeImg == 'default') res.setHeader("Location", "default.png");
    else if (typeImg == 'random') res.setHeader("Location", ALLfiles[getRandomInt(ALLfiles.length)]); 
    res.end();
});

let getAllfiles = () => {
    let walker = walk.walk('./pictures', { followLinks: false });
    walker.on('file', (root, stat, next) => {
        // Add this file to the list of files
        ALLfiles.push(stat.name);
        next();
    });

    walker.on('end', () => {
        console.log("loaded all images...", ALLfiles.length);
    });

}

let getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}*/