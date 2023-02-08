const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
    LocationId: {
        type: String, 
        required: true
    },
    BikeId: {
        type: String,
        required: true
    },
    UserId: {
        type: String,
        required: true
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