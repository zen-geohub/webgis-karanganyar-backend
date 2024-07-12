const { getData, getTest, postData } = require('./controllers/formData');

const router = require('express').Router();

router.get('/form-data', getData)
router.get('/form', getTest)
router.post('/form', postData)

module.exports = router