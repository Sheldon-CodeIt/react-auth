const router = require("express").Router();
let user = require("../models/user.model");

router.route("/register").post((req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.staus(422).json({ error: "Please fill all the entries." });
  }

  user
    .findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.staus(422).json({ error: "Email already exists!" });
      }

      const newUser = new user({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });
      newUser
        .save()
        .then(() => res.status(201).json("User registered successfully!"))
        .catch((error) => res.status(500).json(error + "Error"));
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
