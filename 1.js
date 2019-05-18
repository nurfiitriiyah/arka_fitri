var http = require('http')
var data = {
    name: "Nur Fitriyah",
        address: "Bogor",
        hobbies: ['Reading', 'Watching Movie', 'Coding'],
        is_merried: 0,
        school: {
        highSchool: "SMA Indocement",
            university: "Universitas Gunadarma"
    },
    skills: [
        {
            name: "php",
            score: "80"
        }, {
            name: "node JS",
            score: "90"
        }, {
            name: "MySQL",
            score: "90"
        }, {
            name: "golang",
            score: "70"
        }, {
            name: "PHP-Yii",
            score: "75"
        }, {
            name: "Node JS - Express",
            score: "80"
        }, {
            name: "Vue Js",
            score: "70"
        }
    ]
}
var server = http.createServer((function (request, response) {
    response.writeHead(200,
        {"Content-Type": "text/plain"});
    response.end(JSON.stringify(data));
}));
server.listen(7000);