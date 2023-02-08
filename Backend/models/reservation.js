const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    Location:{
        type: Schema.Types.ObjectId, ref: 'Location'
    },
    Bike:{
        type: Schema.Types.ObjectId, ref: 'Bike'
    },
    User:{
        type: Schema.Types.ObjectId, ref: 'User'
    },
    FromDate: {
        type: Date,
        required: true
    },
    ToDate: {
        type: Date, 
        required: true
    }
});
export default mongoose.model('Reservation', ReservationSchema);