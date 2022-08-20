const mongoose = require("mongoose");

const DB = process.env.DATABASE;

if (!DB) {
  throw Error("NO DATABASE environment variable found");
}

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`connnection successful`);
  })
  .catch((err) => console.log(`no connection ${err}`));
