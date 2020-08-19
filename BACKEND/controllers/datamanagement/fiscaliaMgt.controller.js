
var fiscaliaItemSchema  = require("../../schemas/fiscalia.schema");
const mongoose          = require('mongoose')

exports.findOne = async(req, res) => {
  let fis = await fiscaliaItemSchema.findOne({"_id": req.params.id});
  return res.json(fis)
}

exports.findMany = async(req, res) => {
  let result = await fiscaliaItemSchema.find().sort( { name: 1 } );
  return res.json(result);
}

exports.findAll = async(req, res) => {
  let result = await fiscaliaItemSchema.find({});
  return res.json(result)
}

exports.insertOne = async(req, res) => {
    let item = new fiscaliaItemSchema(req.body);
    let result = await item.save();
    return res.json(result);
}

exports.update = async(req, res) => {
  let result = await fiscaliaItemSchema.updateOne(
    {"_id": req.body.query.id},
    { $set: req.body.data}
  );
  return res.json(result);
}

exports.deleteRow = async(req, res) => {
    let result = await fiscaliaItemSchema.findByIdAndDelete({"_id": req.body.id});
    return res.json(result);
}