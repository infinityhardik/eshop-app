var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

module.exports = (mongoose) => {
  const User = mongoose.model(
    "user",
    mongoose.Schema(
      {
        id: { type: Number, unique: true, required: true },
        isAdmin: { type: Boolean, required: true },
        name: { type: String, required: true, trim: true },
        email: {
          type: String,
          trim: true,
          lowercase: true,
          unique: true,
          required: "Email address is required",
          validate: [validateEmail, "Please fill a valid email address"],
          match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
          ],
        },
        password: { type: String, required: true },
      },
      { timestamps: true }
    )
  );

  return User;
};
