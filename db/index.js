const mongoose = require('mongoose');

main().catch(err => console.log(err));

//establishing connection to database
async function main() {
  await mongoose.connect('mongodb://localhost:27017/notes-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true
  });
}

//testing to make sure the database is now connected
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    //we're connected!
    console.log('👍 db is now connected')
})