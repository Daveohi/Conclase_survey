
const bcrypt = require("bcrypt");
const { Users } = require("../models"); 
const { sign } = require("jsonwebtoken");
const crypto = require('crypto');
const errorHandler = require("../middlewares/error")


// Register function
const register = async (req, res , next) => {
 
  try {
    const { firstname, lastname, email, phoneNumber, password, comfirmPassword } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)

     // Generate unique token for password reset using crypto
     const confirmationToken = crypto.randomBytes(20).toString("hex");


     // Set the expiry time for the reset token (e.g., 1 hour from now)
     const confirmationTokenExpire = new Date(Date.now() + 3600000); // 1 hour
 
    await Users.create({
      firstname,
      lastname,
      email,
      phoneNumber,
      password: hashedPassword,
      comfirmPassword,
      token: confirmationToken,
      tokenExpire: confirmationTokenExpire
    });

    
  res.send(" Welcome register successfully");
    
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
    bcrypt.compare(password, userQuery.password)
    .then(async (isMatch) => {
      if (!isMatch) {
        return next(errorHandler(401, "Wrong email and password"));
      }

      // generate web token for user after successful login

      const accessToken = sign(
        { user_id: userQuery.userId },
        process.env.JWT_TOKEN
      ); //using the id of the user to generate web token

      const { password: pass, comfirmPassword: comfirm, ...restInfo } = userQuery._previousDataValues;

      // Set the access token as a cookie
      res
        .cookie("access_token", accessToken, {
          httpOnly: true, // Cookie cannot be accessed via client-side scripts
          maxAge: 24 * 60 * 60 * 1000, // Cookie expires in 24 hours (optional)
        })
        .status(200)
        .json({
          data: restInfo,
          success: true
        }); //send response without password
    })
    .catch(err => {
      console.error(err);
      return next(errorHandler(500, "Internal Server Error")); // Handle bcrypt errors
    });
  } catch (error) {
   next(error)
  }
};

module.exports = { login, register };     

// "email": "johndoe@conclase.com",
// "password": "secretpassword"
