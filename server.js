const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const getData = require("./helper");

const app = express();

const corsOptions = {
  origin:"https://food-calender-front.onrender.com",
  optionsSuccessStatus: 200,
  methods: 'GET,POST,PUT,PATCH,DELETE',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'] // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.options(cors(corsOptions));

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get("/getData", async(req,res) => {
   const data = await getData.getbreakFast();
   console.log(data);
   res.json({breakfast:data.breakfast, lunch:data.lunch});

})


app.listen(process.env.PORT || 8000, () => {
    console.log(`server running on port ${process.env.PORT || 8000}`);
});