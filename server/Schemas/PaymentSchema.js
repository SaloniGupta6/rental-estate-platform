const { Schema } = require('mongoose');

const PaymentSchema = new Schema({
    Username : {
        type: String,
        required: true
    },

    Amount: {
        type: Number,
        required: true  
    },

    PaymentDate: {
        type: Date,
        default: Date.now
    },
    PaymentMethod: {
        type: String,
        enum: ['credit_card', 'debit_card', 'net_banking', 'upi'],
        required: true  
    },
    TransactionId: {
        type: String,
        required: true,
        unique: true    
    },
});

PaymentSchema.index({ TransactionId: 1 }, { unique: true });
module.exports = PaymentSchema;