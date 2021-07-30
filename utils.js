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

function error(error, message) {
    console.log(codes.getCodesArray());
    return {
        "errors": [
            {
                "code": codes.getCodesArray()[error],
                "reason": message
            }
        ],
        "success": false
    }
}

module.exports = { makeid, error }