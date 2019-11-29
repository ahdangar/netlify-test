const mongoose = require('mongoose');

const UserSchemaa = mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    city: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchemaa);