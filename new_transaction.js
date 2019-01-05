var request = require("request");

var options = { method: 'POST',
url: 'http://0.0.0.0:5003/transactions/new',
body:
    { sender: '6d143bf02f6e8c228f6f00a230088772',
    recipient: '234c23a23e32a123',
    certificate:
        { Name: 'John Harvard',
            'Issuing Authority': 'Harvard University',
        Course: 'Introduction to Computer Science',
        Representative: 'David J. Malan',
            Comment: 'This is to certify that the applicant successfully completed and received passing grade in the course.' } },
    json: true };

request(options, function (error, response, body) {
        if (error) throw new Error(error);
        
        console.log(body);
        });

