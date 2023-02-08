const mongoose = require('mongoose');

const BikeSchema = new mongoose.Schema({
    Location: {
        type: Schema.Types.ObjectId, 
        ref: 'Location'
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