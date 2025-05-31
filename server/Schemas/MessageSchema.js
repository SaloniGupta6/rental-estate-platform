const { Schema } = require('mongoose');

const MessageSchema = new Schema ({
    messageId: {
        type: String,
        required: true,
        unique: true    
    },

    senderId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true  
    },

    receiverId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true  
    },

    content: {
        type: String,
        required: true
    },

    timeStamp: {
        type: Date,
        default: Date.now
    }
});

MessageSchema.index({ messageId: 1 }, { unique: true });
module.exports = MessageSchema;