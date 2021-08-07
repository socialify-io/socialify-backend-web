const codes = require('./error-codes');

function makeid(length, type) {
    var result = '';
    var characters;
    if (type == "normal" || type == "default") characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    if (type == "number" || type == "numonly") characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function success(data) {
    return {
        "success": true,
        "data": data
    }
}

function error(error, message) {
    return {
        "success": false,
        "errors": [
            {
                "code": codes.getCodesArray()[error],
                "reason": message
            }
        ]
    }
}

function get_headers(request) {
    if (
        !request.headers['content-type'] || 
        !request.headers['user-agent'] || 
        !request.headers['timestamp']
    ) throw 'Some required request headers not found.';

    return headers = {
        'Content-Type': request.headers['content-type'],
        'User-Agent': request.headers['user-agent'],
        'Timestamp': request.headers['timestamp']
    } 
}

module.exports = { makeid, success, error, get_headers }