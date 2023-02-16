const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    FullName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    RentedBike: {
      type: Schema.Types.ObjectId,
      ref: "Bike",
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("User", UserSchema);
