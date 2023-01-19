const User = require("../model/UserModel");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
  try {
    /* Gán giá trị người dùng nhập */
    const { username, password, phone, email, address } = req.body;

    /* Kiểm tra username, phone đã có trong hệ thống chưa */
    const usernameCheck = await User.findOne({ username });
    if (usernameCheck) {
      return res.json({ msg: "Username already used", status: false });
    }
    const phoneCheck = await User.findOne({ phone });
    if (phoneCheck) {
      return res.json({ msg: "Phone number already used", status: false });
    }
    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
      return res.json({ msg: "Email already used", status: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      email,
      phone,
      address,
      password: hashedPassword,
    });
    delete user.password;
    return res.json({ status: true, user });
  } catch (err) {
    next(err);
  }
};

module.exports.login = async (req, res, next) => {
  try {
    /* Gán giá trị người dùng nhập */
    const { username, password } = req.body;

    /* Kiểm tra username, phone đã có trong hệ thống chưa */
    const user = await User.findOne({ username });
    if (!user) {
      return res.json({ msg: "Incorrect username or password", status: false });
    }
    const isPasswordsValid = await bcrypt.compare(password, user.password);
    if (!isPasswordsValid) {
      return res.json({ msg: "Incorrect username or password", status: false });
    }
    delete user.password;
    return res.json({ status: true, user });
  } catch (err) {
    next(err);
  }
};
