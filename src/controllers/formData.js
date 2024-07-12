const mongoose = require('mongoose')
const FormModel = require('../models/formDataModel')

const getData = (req, res) => {
  res.json({ message: 'Hello from the server!' })
}

const getTest = (req, res) => {
  // {"properties.OPD TUJUAN AKHIR": "Dinas Pekerjaan Umum dan Perumahan Rakyat"}
  FormModel.find()
  .exec()
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(500).json({ error: err })
  })
}

const postData = (req, res) => {
  // const formDataEntries = Object.entries(req.body).map(([key, value]) => ({ [key]: value }));
  const formData = new FormModel(
    // ...formDataEntries
    req.body
  );

  formData.save()
  .then(result => {
    res.status(201).json({
      message: 'Data saved successfully',
      createdData: result
    })
  })
  .catch(err => {
    res.status(500).json({ error: err })
  })
}

module.exports = {
  getData,
  getTest,
  postData,
}