const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());
const dotenv = require('dotenv');
const axios = require('axios');
const bodyParser = require('body-parser');

const PORT = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

dotenv.config();

app.post('/shopping', async (req, res) => {
  try {
    const { startDate, endDate, timeUnit, device, gender, keywordGroups } =
      req.body;

    const request_body = {
      startDate: startDate,
      endDate: endDate,
      timeUnit: timeUnit,
      category: device,
      keyword: gender,
      device: '',
      gender: '',
      ages: keywordGroups,
    };

    const url =
      'https://openapi.naver.com/v1/datalab/shopping/category/keyword/age';

    const headers = {
      'Content-Type': 'application/json',
      'X-Naver-Client-Id': process.env.CLIENT_ID,
      'X-Naver-Client-Secret': process.env.CLIENT_SECRECT,
    };

    const result = await axios.post(url, JSON.stringify(request_body), {
      headers: headers,
    });
    console.log(result.data);

    return res.json(result.data);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
});

app.listen(PORT, () => console.log(`this server ${PORT}`));
