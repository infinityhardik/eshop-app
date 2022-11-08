module.exports = (mongoose) => {
  const Order = mongoose.model(
    "order",
    mongoose.Schema(
      {
        id: { type: Number, unique: true, required: true },
        address: { type: mongoose.Schema.Types.ObjectId, ref: "address" },
        product: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
        quantity: { type: Number, required: true },
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "user",
        },
      },
      { timestamps: true }
    )
  );

  return Order;
};
