const express = require('express')
const router = express.Router()
const {createEvent} = require('../controllers/Lfscontroller.js')
const {createOrganization} = require('../controllers/Ltscontroller.js')
router.post("/lfs",createEvent)
router.post("/lts",createOrganization)
module.exports=router