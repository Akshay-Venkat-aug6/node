import mongoose from 'mongoose';

const mobileSchema = new mongoose.Schema({
    mobile_name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    brand: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    os: {
        type: String,
        required: true,
        trim: true
    },
    brand: {
        type: String,
        required: true,
        trim: true
    },
    display_size: {
        type: String,
        required: true,
        trim: true
    },
    width: {
        type: String,
        required: true,
        trim: true
    },
    height: {
        type: String,
        required: true,
        trim: true
    },
    storage: {
        type: String,
        required: true,
        trim: true
    }
}, {timestamps: true});

exports._mobile = mongoose.model('mobile', mobileSchema);