    const express = require("express");
    const mongoose = require("mongoose");
    const cors = require("cors");
    const app = express();
    require("dotenv").config();
    const cookieParser = require("cookie-parser");
    const authRoute = require("./routes/AuthRoute");
    const path = require('path');
    

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
    // Serve the static build files
app.use(express.static(path.join(__dirname, 'build')));

// Handle all other requests by serving the index.html file
app.get('/*', (req, res) => {
res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
    app.use(cookieParser());

    app.use(express.json()); 

    app.use("/", authRoute);

    require("./routes/pets.routes")(app);

    app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    });
