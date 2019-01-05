var express = require('express');
var app = express();
var path = require('path');
var request = require('request');

app.use(express.static('public'))

// viewed at http://localhost:8080

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/ind.html'));
});

app.post('/add', function(req, res) {
         req.on('data', function(data) {
                
                var certificate = data.toString()
                
                console.log(certificate)
                
                var options = { method: 'POST',
                url: 'http://0.0.0.0:5003/transactions/new',
                body:
                certificate,
                json: true };
                
                request(options, function (error, response, body) {
                        if (error) throw new Error(error);
                        
                        console.log(body);
                        });
                
                })
        });


var server=app.listen(8080,'localhost',function(){
    
    console.log("Server is listening..")
    
});



