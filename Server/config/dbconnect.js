const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://arnav12:1991@cluster0.cwvtjx5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
  console.log("Connection Established with Test Database!")
});