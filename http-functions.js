module.exports = function getHTML(options, callback) {
    var newData = [];

    https.get(options, function (response) {

        response.setEncoding('utf8');

        response.on('data', function (data) {
            newData.push(data)
        });

        response.on('end', function () {
            console.log("Response complete.");
            callback(newData.join(''));
        });
    });
}
function printHTML(html) {
    console.log(html);
};
var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};


getHTML(options, printHTML)