const spawn = require('child_process').spawn;

// We need to stringify the data as
// python cannot directly read JSON
// as command line argument.
// let stringifiedData = JSON.stringify(data);

// Call the python process and pass the
// data as command line argument.
// const py = spawn('python', ['print.py']);
const py = spawn('python3', ["ff6-dialogue.py", "Gogo"]);

resultString = '';

// As the stdout data stream is chunked,
// we need to concat all the chunks.
py.stdout.on('data', function (stdData) {
    resultString += stdData.toString();
});

py.stdout.on('end', function () {

    // Parse the string as JSON when stdout
    // data stream ends
    let resultData = JSON.parse(resultString);
    // console.log(resultData);
    console.log(typeof (resultString))

    var fs = require('fs');
    fs.writeFile("dialogue.json", resultString, function (err) {
        if (err) {
            console.log(err);
        }
    });

});
