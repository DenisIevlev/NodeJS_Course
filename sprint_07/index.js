const http = require('http');
const path = require('path');
const PORT = 3500;
const { mimeTypes } = require('./utilities/mime');
const { staticFile } = require('./utilities/static_file');


http.createServer(function(req, res) {
    const url = req.url;
    console.log(url);

    switch (url) {
        case '/main':
            staticFile(res, '/html/main_page.html', '.html');
            break;
        default:
            const extname = String(path.extname(url)).toLocaleLowerCase();
            if (extname in mimeTypes) {
                staticFile(res, url, extname);
            } else {
                res.statusCode = 404;
                res.end();
            }
    }

}).listen(PORT);



