function validation(req, res, next) {
    if (JSON.stringify(req.body) == '{}') {
        next(err);
    } else next();
}

function checkAuthorization(req, res, next) {
    const apiKey = req.query.apiKey;
    if (apiKey !== 'api') {
        next(err);
    }
    else next();
}

module.exports = {validation, checkAuthorization}