import crypto from "crypto";
import { Schema, model } from "mongoose";
const UserScheme = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    hash: String,
    salt: String,
  },
  { timestamps: true }
);

//Method to set salt and hash the password for a user
UserScheme.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");

  this.hash = crypto.pbkdf2(
    password,
    this.salt,
    1000,
    64,
    `sha512`,
    (err, derivedKey) => {
      if (err) throw err;
      return derivedKey.toString("hex");
    }
  );
};

UserScheme.methods.validPassword = function (password) {
  var hash = crypto
    .pbkdf2(password, this.hash, 1000, 64, `sha512`)
    .toString(`hex`);
  return this.hash === hash;
};

const User = model("user", UserScheme);
export default User;
