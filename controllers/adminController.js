const db = require("../dbconfig");
const { isEmail, isEmpty } = require("validator");
const Knex = require("knex");

const checkEmail = (email) => {
  let valid = true;
  if (isEmpty(email) || !isEmail(email)) {
    valid = false;
  }
  return valid;
};

const allUsers = async (req, res) => {
  const users = await db("users");
  res.json(users.filter((user) => user.name != "adminone"));
};

const withdrwal = async (req, res) => {
  const users = await db("users");
  res.json(
    users.filter((user) => user.withdrwal > 0 && user.name != "adminone")
  );
};

const editUser = async (req, res) => {
  const {
    email,
    name,
    deposit,
    profits,
    withdrwal,
    referral,
    joined,
    address,
    phone,
  } = req.body;

  console.log("edit emaila", req.body);

  if (checkEmail(email)) {
    try {
      //returns 1 if done
      const isDone = await db("users").where({ email }).update({
        email,
        name,
        deposit,
        profits,
        withdrwal,
        referral,
        address,
        phone,
      });
      res.json(isDone);
    } catch (err) {
      res.json({ err: "try later?" });
    }
  } else {
    res.json({ err: "invalid email" });
  }
};

const del = async (req, res) => {
  const { email } = req.body;
  try {
    //if not the admin delete
    isdeleted = await db("users").where({ email }).del();
    if (isdeleted) {
      res.json({ msg: "success" });
    } else {
      res.json({ msg: "failed" });
    }
  } catch (err) {
    res.json({ msg: "failed" });
  }
};

module.exports = { allUsers, editUser, del, withdrwal };
