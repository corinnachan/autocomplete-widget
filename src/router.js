var handler = require('./handler.js');

let router = function (request, response) {
    let endpoint = request.url;

    if (endpoint === '/') {
        handler.handlerHomepage (request, response);
    } else {
        handler.handlerNonHomepage (request, response);
    }
}

module.exports = router;
