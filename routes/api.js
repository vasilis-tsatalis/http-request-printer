const express = require("express");
const router = express.Router();

const { create } = require("../src/endpoints/create");
const { read } = require("../src/endpoints/read");
const { deleted } = require("../src/endpoints/delete");
const { update } = require("../src/endpoints/update");

router.route("/").post(create);
router.route("/").get(read);
router.route("/{:id}").delete(deleted);
router.route("/{:id}").update(update);

module.exports = router;