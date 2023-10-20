const { ObjectId } = require('mongodb');
const connectToMongoDB = require('../configs/mongodb.config.js')

let db

connectToMongoDB()
  .then(result => { db = result })
  .catch(err => console.log(err))

console.log(db);

async function insert(collection, data) {
  const collect = db.collection(collection)
  const result = await collect.insertOne(data)
  return result
}

async function findAll(collection) {
  const collect = db.collection(collection);
  const result = await collect.find({}, {projection: {_id:true, nameModel:true}});
  return result.toArray();
}

async function findOne(collection, id) {
  const collect = db.collection(collection);
  const result = await collect.findOne({_id: new ObjectId(id)});
  return result;
}

async function deleteOne(collection, id) {
  const collect = db.collection(collection)
  await collect.deleteOne({_id: new ObjectId(id)})
}

async function updateOne(collection, newModels, id) {
  const collect = db.collection(collection)
  return await collect.updateOne({_id: new ObjectId(id)}, {$set: newModels})
}


module.exports = {
  insert,
  findAll,
  findOne,
  deleteOne,
  updateOne
}