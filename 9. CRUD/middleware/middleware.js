function checkAuthorization(req, res, next) {
    const apiKey = req.query.apiKey;
    if (apiKey !== 'api') {
        const err = new Error("Нужно авторизоваться!")
        err.status = 401
        next(err);
    }
    else next();
}

const error = (err, req, res, next) => {
    res.send({status: err.status, messange: err.message})
}

module.exports = {checkAuthorization, error}