let express = require("express"); // looks into the node modules to find it
let router = express.Router();
let Horoscope = require("../models/horoscope");

router.get("/all", async (req, res) => {
  try {
    const horoscope = await Horoscope.find();
    res.status(200).send(horoscope);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const horoscope = new Horoscope(req.body);
    const newHoroscope = await horoscope.save();
    res.status(201).send(newHoroscope);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

router.post("/many", async (req, res) => {
  try {
    console.log(req.body);
    Horoscope.insertMany(req.body)
      .then(function (mongooseDocuments) {
        res.status(201).send({ message: "success" });
      })
      .catch(function (err) {
        res.status(400).send({ message: err.message });
      });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

module.exports = router;
