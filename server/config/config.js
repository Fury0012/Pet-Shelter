const mongoose = require("mongoose")

dbName = process.env.dbName

mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => console.log(`connected to ${dbName}`))
    .catch((err)=> console.log(err))