const { ObjectId } = require('mongodb');
const Services = require('../services/mongodb.services.js');

const postUser = async (req, res, next) => {
    try {
        const name = req.body
        const user = await Services.insert("users", name)
        res.json(user)
    }
    catch(er) {
        const error = new Error(er)
        error.status = 500
        next(error)
    }
}

const deleteUser = async(req, res, next) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            await Services.deleteOne('users', req.params.id)
            res.send({status: 200, messange: `id ${req.params.id} deleted`})
        } else {
            const error = new Error(`id ${req.params.id} not found`);
            error.status = 404
            next(error);
        }
    } catch(er) {
        const error = new Error(er)
        error.status = 500
        next(error)
    }
}

module.exports = {
    postUser,
    deleteUser
}