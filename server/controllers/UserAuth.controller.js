
const bcrypt = require("bcrypt");
const { Users } = require("../models"); 
const { sign } = require("jsonwebtoken");
const errorHandler = require("../middlewares/error")


// Register function
const register = async (req, res , next) => {
 
  try {
    const { firstname, lastname, email, phoneNumber, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)

    await Users.create({
      firstname,
      lastname,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    
  res.send("register successfully");
    
  } catch (error) {
    next(error);
  }
  
}

// login function
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userQuery = await Users.findOne({
      where: { email: email},
    });

    if (!userQuery) {
      return next(errorHandler(401, "User not found"));
    }

    // Compare the password from user input and password in the table
    bcrypt.compare(password, userQuery.password).then((isMatch) => {
      if (!isMatch) {
        return next(errorHandler(401, "Wrong email and password"))
      }

      // generate web token for user after successful login

      const accessToken = sign(
        { user_id: userQuery.user_id},
        process.env.JWT_TOKEN
      ); //using the id of the user to generate web token

      const { password: pass, ...restInfo } = userQuery._previousDataValues;

      // Set the access token as a cookie
      res.cookie("access_token", accessToken, {
        httpOnly: true, // Cookie cannot be accessed via client-side scripts
        secure: process.env.NODE_ENV === "production", // Cookie sent over HTTPS only in production
        sameSite: "strict", // Cookie not sent in cross-origin requests
        maxAge: 24 * 60 * 60 * 1000, // Cookie expires in 24 hours (optional)
      })
      .status(200).json(restInfo) //send response without password
    });
  } catch (error) {
    console.error("Error logging in:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { login, register };     

// "email": "johndoe@conclase.com",
// "password": "secretpassword"