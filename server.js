//Install express server
const express = require('express');
const path = require('path');

<<<<<<< HEAD


=======
>>>>>>> 0527ad93c45485d4c43fc6ea990f419d2bb854db
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
<<<<<<< HEAD
app.listen(process.env.PORT || 8089);
=======
app.listen(process.env.PORT || 8080);
>>>>>>> 0527ad93c45485d4c43fc6ea990f419d2bb854db
