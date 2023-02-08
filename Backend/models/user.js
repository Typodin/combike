const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    FullName: {
        type: String, 
        required: true
    },
    RentedBikeId: {
        type: String
    }
});
export default mongoose.model('User', UserSchema);