const Services = require('../services/mongodb.services.js');
const { ObjectId } = require('mongodb');

async function getModels(req, res) {
  try{
  let allComments = await Services.findAll("models")
  res.json(allComments)
  } 
  catch(er) {
    const error = new Error(er)
    error.status = 500
    next(error)
  }
}

async function getModel(req, res) {
  try {
  if (ObjectId.isValid(req.params.id)) {
    let model = await Services.findOne("models",req.params.id)
    res.json(model)
  } else {
    res.status(404).send("Not Found")
  }
  }
  catch(er) {
    const error = new Error(er)
    error.status = 500
    next(error)
  }
}

async function postModel(req, res) {
  try {
    const {nameUser, nameModel, typeModel, JSONfile, description, comments} = req.body;
    const data = Date();
    await Services.insert("models",{nameUser, nameModel, typeModel, JSONfile, description, comments, data});
    res.send('Спасибо, за вашу отзывчивость!');
  }
  catch(er) {
    const error = new Error(er)
    error.status = 500
    next(error)
  }
}

const deleteModel = async(req, res, next) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
        await Services.deleteOne('models', req.params.id)
        res.send({status: 200, messange: `id ${req.params.id} deleted`})
    } else {
        const error = new Error(`id ${req.params.id} not found`);
        error.status = 404
        next(error);
    }
  } 
  catch(er) {
    const error = new Error(er)
    error.status = 500
    next(error)
  }
}

const putModel = async(req, res, next) => {
  try {
    const {nameUser, nameModel , description} = req.body
    if (ObjectId.isValid(req.params.id)) {
        const data = Date();
        res.json(await Services.updateOne('models', {nameUser, nameModel, description, data}, req.params.id))
    } else {
        const error = new Error(`id ${req.params.id} not found`);
        error.status = 404
        next(error);
    }
  } catch(er) {
    const error = new Error(er);
    error.status = 500
    next(error);
  }
}

module.exports = {
  getModels,
  postModel,
  getModel,
  deleteModel,
  putModel
}