const express = require('express');
const bookingApi = require('./apis/bookingApi');
const movieApi = require('./apis/movieApi')

var app = express();
const port = 3000;

app.use(express.json());

app.get('/',function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.use('/api/booking', bookingApi);
app.use('/api/movie', movieApi);


app.listen(port,function(){
});

console.log('Plase goto http://localhost:'+ port +' to access this app');
console.log('listening on port :', port);
