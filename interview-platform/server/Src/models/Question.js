const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: String,

  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard']
  },

  topic: String,

  solved: {
    type: Boolean,
    default: false
  }
});

module.exports =
mongoose.model(
  'Question',
  questionSchema
);