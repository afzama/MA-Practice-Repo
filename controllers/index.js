const express = require("express");
const router = express.Router();

const htmlRoutes = require("./htmlController")
router.use(htmlRoutes)

const petsRoutes = require("./petsController");
router.use("/api/pets",petsRoutes)

const ownersRoutes = require("./ownersController");
router.use("/api/owners",ownersRoutes)

module.exports = router;