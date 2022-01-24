const Person = require("../model/Person");

//create person
exports.createPerson = async (req, res) => {
  try {
    const findPerson = await Person.findOne({ name: req.body.name });
    if (findPerson) {
      return res
        .status(400)
        .send({ msg: "User already exists, check your Email and Phone" });
    }
    const newPerson = new Person(req.body);
    await newPerson.save();
    res.status(200).send({ msg: "Add person succ", newPerson });
  } catch (error) {
    res.status(400).send({ msg: "can not save this person", error });
  }
};

//read Persons
exports.readPerson = async (req, res) => {
  try {
    const listPerson = await Person.find({});
    res.status(200).send({ msg: "get all peoples succ", Peoples: listPerson });
  } catch (error) {
    res.status(400).send({ msg: "get peoples failed" });
  }
};
//read one person by id
exports.readOnePerson = async (req, res) => {
  try {
    const onePerson = await Person.findById(req.params.id);
    res.status(200).send({ msg: "get the contact by id", onePerson });
  } catch (error) {
    res.status(400).send({ msg: "can not get the person", error });
  }
};

//update Person
exports.updatePerson = async (req, res) => {
  try {
    const PersonOne = await Person.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );

    if (PersonOne.modifiedCount) {
      return res.status(200).send({ msg: "succ" });
    }
    res.status(500).send({ msg: "no update" });
  } catch (error) {
    res.status(400).send({ msg: "update failed", error });
  }
};

//delete Person by id
exports.deletePerson = async (req, res) => {
  try {
    await Person.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "delete successfull" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete" });
  }
};
