var https = require('https');
function getAndPrintHTML() {
    var newData = [];
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    };
    https.get(requestOptions, function (response) {

        // set encoding of received data to UTF-8
        response.setEncoding('utf8');

        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) {
            newData.push(data)
            console.log(newData);
        });
    })
}
getAndPrintHTML()