const {Router}=require('express');
const { LinePyramid } = require('../controllers/pyramid.controller');
const router = Router();


router.route ('/:n').get(LinePyramid)

module.exports = router;