const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  idrol: {
    type: Number,
    required: true,
  },
  nombrerol: {
    type: String,
    required: true
  },
  descrol: {
    type: String,
    required: true

  },
  permisosrol: {
    type: String,
    required: true

  }
});

module.exports = mongoose.model('User', userSchema);