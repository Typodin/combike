const mongoose = require('mongoose');

const BikeSchema = new mongoose.Schema({
    Id: {
        type: String, 
        required: true
    },
    Available: {
        type: bool,
        required: true
    },
    Functioning: {
        type: bool,
        required: true
    }
});
export default mongoose.model('Bike', BikeSchema);