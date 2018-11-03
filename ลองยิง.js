var request = require('request');
request.post(
    'http://35.240.139.71:20000/api/word ',
    { json: {
        "text":"มี AmericanBurger ไหม"
    } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);