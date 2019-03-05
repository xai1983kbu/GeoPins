const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema({
  title: String,
  content: String,
  image: String,
  latitude: Number,
  longitude: Number,
  // https://www.udemy.com/build-a-realtime-app-with-react-hooks-and-graphql/learn/v4/t/lecture/13681838?start=218
  author: { type: mongoose.Schema.ObjectId, ref: "User" },
  comments: [
    {
      text: String,
      createdAt: { type: Date, default: Date.now },
      author: { type: mongoose.Schema.ObjectId, ref: "User" }
    }
  ]
}, { timestamp: true });

module.exports = mongoose.model("Pin", PinSchema);