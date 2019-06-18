var fs = require('fs');
const path = require("path");
var handler = require('./handler.js');

let router = function (request, response) {
    let endpoint = request.url;

    if (endpoint === '/') {
        handler.handlerHomepage (request, response);
    } else if (endpoint.includes('/autocomplete')) {
        handler.handlerAutocomplete (request, response);
    } else if (endpoint === '/script.js') {
        const filePath = path.join(__dirname, "..", "public", "script.js");
        script = fs.readFileSync(filePath, "utf8");
        response.write(script);
        response.end();
    } else if (endpoint === '/style.css'){
        const cssPath = path.join(__dirname, "..", "public", "style.css");
        css = fs.readFileSync(cssPath, "utf8");
        response.write(css);
        response.end();
    } else {
        handler.handlerNonHomepage (request, response);
    }
}

module.exports = router;
