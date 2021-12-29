const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const uri = process.env.MONGODB_URI
//mongoose.set('useUnifiedTopology', true)
//mongoose.set('useNewUrlParser', true)
//mongoose.set('useCreateIndex', true)
mongoose.connect(uri)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('we are connected!')
})


/*const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://tridentDAO:<password>@cluster0.0ktll.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/
