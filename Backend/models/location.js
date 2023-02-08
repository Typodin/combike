const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    Address: {
        type: String, 
        required: true
    },
    Bikes: {
        type: Array,
        required: true
    },

});
export default mongoose.model('Location', LocationSchema);