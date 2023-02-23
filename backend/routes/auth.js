const router = require("express").Router();
let user = require("../models/user.model");

router.route("/register").post( async (req, res) => {


  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill all the entries." });
  }

  try {
    
    const userExist =  await user.findOne({ email: email });
    if(userExist)
    {
        return res.status(422).json({ error: "Email already exists!" });
    }

    const newUser = new user({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });

      await newUser.save()

      res.status(201).json({message: "user registered successfully"});
    
  }
  catch(error)
  {
    console.log(error);
  }


});

module.exports = router;
