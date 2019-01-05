var request = require("request");

var options = { method: 'GET',
    url: 'http://0.0.0.0:5001/nodes/resolve'};

request(options, function (error, response, body) {
        if (error) throw new Error(error);
        
        console.log(body);
        
        var options = { method: 'GET',
        url: 'http://0.0.0.0:5001/verify'};
        
        request(options, function (error, response, body) {
                if (error) throw new Error(error);
                
                console.log(body);
                
                var options = { method: 'GET',
                url: 'http://0.0.0.0:5001/mine'};
                
                request(options, function (error, response, body) {
                        if (error) throw new Error(error);
                        
                        console.log(body);
                        });
                
                });
        });



