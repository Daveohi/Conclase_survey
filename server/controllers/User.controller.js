
const bcrypt = require("bcrypt");
const { Users } = require("../models"); //destructure the table name from the model
const errorHandler = require("../middlewares/error")

const getUser = async (req, res, next) => {
  try {
    const user = await Users.findOne({ where: { id: req.params.id } });
  
    if (!user) return next(errorHandler(404, 'User not found!'));
  
    const { password: pass, ...rest } = user._previousDataValues;
  
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

const  updateUser = async (req, res, next) => {
  //res.send('hello world')
  try {
    const userId = req.user.id;
    const requestedUserId = req.params.id;

    if (userId !== requestedUserId) {
      return next(errorHandler(401, 'You can only update your own account!'));
    }

    const updatedFields = {};

    if (req.body.password) {
      updatedFields.password = bcrypt.hash(req.body.password, 10);
    }

    updatedFields.username = req.body.username;
    updatedFields.email = req.body.email;

    const [updatedRowCount] = await Users.update(updatedFields, {
      where: { id: requestedUserId },
    });

    if (updatedRowCount === 0) {
      return next(errorHandler(404, 'User not found'));
    }

    const updatedUser = await Users.findByPk(requestedUserId, {
      attributes: { exclude: ['password'] },
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }

}


module.exports = {updateUser, getUser}