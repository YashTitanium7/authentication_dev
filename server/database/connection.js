const mongoose = require('mongoose')
const DB = process.env.DATABASE_URI || require('../../config.json').DATABASE_URI

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`[+] Connection succesfull`);
}).catch((err) => console.log(`[-] Connection failed \n${err.message}`))