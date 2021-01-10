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
  timestamps: true,
  toObject: {
    // remove `id` field when we call `.toObject`
    transform: (_doc, child) => {
      // delete child._id
      return { name: child.firstName, dob: child.dob.toDateString() }
    }
  }
})

module.exports = mongoose.model('Child', childSchema)
