const express = require('express');
const fieldserviceController = require('../controllers/fieldservice.controller');

const router = express.Router();
router.post("/", fieldserviceController.create);
router.get("/", fieldserviceController.getAll);
router.delete("/:id", fieldserviceController.deleteOne);
router.put("/:id", fieldserviceController.updateOne)

module.exports = router;