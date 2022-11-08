module.exports = (mongoose) => {
  const Address = mongoose.model(
    "address",
    mongoose.Schema(
      {
        id: { type: Number, unique: true, required: true },
        name: { type: String, required: true, trim: true },
        city: { type: String, required: true, trim: true },
        state: { type: String, required: true, trim: true },
        street: { type: String, required: true, trim: true },
        contactNumber: {
          type: Number,
          required: function () {
            return this.contact.length === 10;
          },
          unique: true,
        },
        landmark: { type: String, trim: true },
        zipCode: {
          type: Number,
          required: function () {
            return this.zipCode.length === 6;
          },
        },
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
        },
      },
      { timestamps: true }
    )
  );

  return Address;
};
