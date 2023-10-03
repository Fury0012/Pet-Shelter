    const express = require("express");
    const mongoose = require("mongoose");
    const cors = require("cors");
    const app = express();
    require("dotenv").config();
    const cookieParser = require("cookie-parser");
    const authRoute = require("./routes/AuthRoute");
    

    const { MONGO_URL, PORT } = process.env;

        mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB is  connected successfully"))
    .catch((err) => console.error(err));

    app.use(
    cors({
        origin: ["https://pet-shelter-hytm.onrender.com"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
    );
    app.use(cookieParser());

    app.use(express.json()); 

    app.use("/", authRoute);

    require("./routes/pets.routes")(app);

    app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    });
