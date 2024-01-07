import crypto from "crypto";
import { Schema, model } from "mongoose";
const UserScheme = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    lastname: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
      require: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    location: {
      type: Number,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    restLink: {
      type: String,
    },
    hash: String,
    salt: String,
  },
  { timestamps: true }
);

//Method to set salt and hash the password for a user
UserScheme.methods.setPassword = function (password) {
  // randomBytes generates a set of random characters and then toString converts them to a hexadecimal string.
  this.salt = crypto.randomBytes(16).toString("hex");

  this.hash = crypto.pbkdf2Sync(
    password,
    this.salt,
    // number iterations for high security
    1000,
    // 64 bytes
    64,
    `sha512`,
    (err, derivedKey) => {
      if (err) throw err;
      return derivedKey.toString("hex");
    }
  );
};

UserScheme.methods.validatePassword = function (password) {
  let hash = crypto
    .pbkdf2Sync(password, this.hash, 1000, 64, `sha512`)
    .toString(`hex`);
  return this.hash == hash;
};

const User = model("user", UserScheme);
export default User;
