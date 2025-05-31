const { Schema } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
    },  
});

UserSchema.index({ email: 1 }, { unique: true });
module.exports = UserSchema;