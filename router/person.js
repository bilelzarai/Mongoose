const express = require("express");
const {
  readPerson,
  createPerson,
  deletePerson,
  readOnePerson,
  updatePerson,
} = require("../controllers/person.Controllers");

const router = express.Router();
//test
router.get("/test", (req, res) => {
  res.send("test api succ");
});
//CRUD
//create person
router.post("/", createPerson);

// read all peoples
router.get("/", readPerson);
// read one person
router.get("/:id", readOnePerson);

//update one person by id
router.put("/:id", updatePerson);

//delete one person by id
router.delete("/:id", deletePerson);

module.exports = router;
