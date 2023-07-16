const mongoose = require('mongoose');

const schema = mongoose.Schema({
    password: {
        type: String,
        required: true,
      },
},{
    timestamps: true,
});
mongoose.model('password', schema);
