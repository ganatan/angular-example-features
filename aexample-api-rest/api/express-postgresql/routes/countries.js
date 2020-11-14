const express = require('express');
const router = express.Router();

const queries = require('../scripts/queries/countries');

router.get('/', function (req, res, next) { queries.getItems(req, res, next, false); });
router.get('/:id', function (req, res, next) { queries.getItem(req, res, next, false); });
router.delete('/:id', function (req, res, next) { queries.deleteItem(req, res, next, false); });
router.put('/:id', function (req, res, next) { queries.updateItem(req, res, next, false); });
router.post('/', function (req, res, next) { queries.createItem(req, res, next, false); });

module.exports = router;

