const express = require('express')
const router = express.Router()
const {createEvent,getlfs} = require('../controllers/Lfscontroller.js')
const {createOrganization,getOrganizations} = require('../controllers/Ltscontroller.js')

router.post("/lfs",createEvent)
router.post("/lts",createOrganization)
router.get("/lts",getOrganizations)
router.get("/lfs",getlfs)
module.exports=router