const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    Address: {
        type: String, 
        required: true
    },
    Bikes:[
        {type: Schema.Types.ObjectId, ref: 'Bike'},
    ]

});
export default mongoose.model('Location', LocationSchema);