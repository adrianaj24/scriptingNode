var https = require('https');
function getAndPrintHTML(options) {

    var newData = [];

    var options = {
        host: 'sytantris.github.io',
        path: '/http-examples/step3.html'
    }
    https.get(options, function (response) {

        // set encoding of received data to UTF-8
        response.setEncoding('utf8');

        // the callback is invoked when a `data` chunk is received
        response.on('data', function (data) {
            newData.push(data)
            console.log(newData);
        });
    })
}
getAndPrintHTML();
