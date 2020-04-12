const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "",
    },
    user: {
        type: String,
        required: true,
        default: "",
    },
    bio: String,
    avatar:{
        type: String,
        required: true,
        default: "",
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes : [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    timestamps: true,
});

module.exports = model('Dev', DevSchema);