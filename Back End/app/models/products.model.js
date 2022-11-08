module.exports = (mongoose) => {
  const Product = mongoose.model(
    "product",
    mongoose.Schema(
      {
        id: { type: Number, unique: true, required: true },
        name: { type: String, required: true, trim: true },
        category: { type: String, required: true, trim: true },
        manufacturer: { type: String, required: true, trim: true },
        availableItems: { type: Number, required: true },
        price: {
          type: Number,
          required: function () {
            return this.price > 0;
          },
        },
        imageURL: { type: String, required: true, trim: true },
        description: { type: String, required: true, trim: true },
      },
      { timestamps: true }
    )
  );

  return Product;
};
