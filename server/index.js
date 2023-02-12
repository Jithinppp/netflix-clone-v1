const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.post("/payment", async (req, res) => {
  try {
    const amount = req.body.amount;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "inr",
      payment_method_types: ["card"],
    });
    res.send(paymentIntent);
  } catch (error) {
    console.log({ error });
    return {
      statusCode: 400,
      body: JSON.stringify({ error }),
    };
  }
});
app.get("/payment", async (req, res) => {
  //   console.log(req.body);
  res.send("hey contact me jithinppp on likedIn");
});
app.get("/", (req, res) => {
  res.send(
    "Hai there this is a simple netflix clone app react-node project with payment system by using stripe"
  );
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
