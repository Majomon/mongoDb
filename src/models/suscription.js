const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  active: Boolean,
  additionalBenefits: String
});


module.exports = mongoose.model("Subscription", subscriptionSchema);