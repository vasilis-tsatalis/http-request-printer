const express = require("express");
const router = express.Router();

const { to_create } = require("../src/endpoints/create");
const { to_read } = require("../src/endpoints/read");
const { to_delete } = require("../src/endpoints/delete");
const { to_update } = require("../src/endpoints/update");

router.route("/").post(to_create);
router.route("/").get(to_read);
router.route("/").delete(to_delete);
router.route("/").put(to_update);

module.exports = router;