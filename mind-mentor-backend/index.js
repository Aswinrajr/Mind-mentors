const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");


const { PORT } = require("./config/variables/variables");
const dbConnect = require("./config/database/dbConnect")
// const userRoute = require("./routes/user/userRoute.js")

app.set("trust proxy", true);

// DATABASE CONNECTION
dbConnect()

app.use(cookieParser());
app.use(express.json());   

const allowedOrigins = [];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`CORS error for origin: ${origin}`);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.disable("x-powered-by");


// app.use("/",userRoute)




app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
