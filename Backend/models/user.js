const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: true,
  },
  RentedBike: {
    type: Schema.Types.ObjectId,
    ref: "Bike",
  },
});
export default mongoose.model("User", UserSchema);
