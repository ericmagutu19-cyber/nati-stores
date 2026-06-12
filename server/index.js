import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
  origin:
    "https://nati-stores.vercel.app"
}));

app.use(express.json());

const PORT = 5000;

/* ACCESS TOKEN */

const getAccessToken = async () => {

  const auth = Buffer.from(

    `${process.env.CONSUMER_KEY}:${process.env.CONSUMER_SECRET}`

  ).toString("base64");

  const response = await axios.get(

    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",

    {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    }
  );

  return response.data.access_token;
};

/* STK PUSH ROUTE */

app.post("/stkpush", async (req, res) => {

  try {

    const token = await getAccessToken();

    const timestamp = new Date()

      .toISOString()

      .replace(/[-:TZ.]/g, "")

      .slice(0, 14);

    const password = Buffer.from(

      `${process.env.BUSINESS_SHORTCODE}${process.env.PASSKEY}${timestamp}`

    ).toString("base64");

    /* FORMAT PHONE NUMBER */

    const rawPhone = req.body.phone;

    let formattedPhone =
      rawPhone.replace(/\s+/g, "");

    if (
      formattedPhone.startsWith("+254")
    ) {

      formattedPhone =
        formattedPhone.replace("+", "");
    }

    else if (
      formattedPhone.startsWith("0")
    ) {

      formattedPhone =
        "254" +
        formattedPhone.slice(1);
    }

    /* STK PUSH */

    const response = await axios.post(

      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",

      {

        BusinessShortCode:
          process.env.BUSINESS_SHORTCODE,

        Password:
          password,

        Timestamp:
          timestamp,

        TransactionType:
          "CustomerPayBillOnline",

        Amount:
          req.body.amount,

        PartyA:
          formattedPhone,

        PartyB:
          process.env.BUSINESS_SHORTCODE,

        PhoneNumber:
          formattedPhone,

        CallBackURL:
          process.env.CALLBACK_URL,

        AccountReference:
          "NATI STORES",

        TransactionDesc:
          "Football Gear Payment",
      },

      {
        headers: {
          Authorization:
            `Bearer ${token}`,
        },
      }
    );

    res.json(response.data);

  }

  catch (error) {

    console.log(
      error.response?.data || error.message
    );

    res.status(500).json({
      error: "STK Push Failed",
    });
  }

});

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});

