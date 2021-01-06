const mongoose = require('mongoose')

const childSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  birthWeight: {
    type: Number,
    required: true,
    min: 0
  },
  birthLength: {
    type: Number,
    required: true,
    min: 0
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Child', childSchema)
