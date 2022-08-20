const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const dotenv = require('dotenv');
const axios = require('axios');

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

dotenv.config();

app.post('/data', async (req, res) => {
  try {
    const { startDate, endDate, timeUnit, device, gender, keywordGroups } =
      req.body;
    const request_body = {
      startDate: '2017-08-01',
      endDate: '2017-09-30',
      timeUnit: 'month',
      category: '50000000',
      keyword: '정장',
      device: '',
      gender: '',
      ages: ['10', '20'],
    };

    const url =
      'https://openapi.naver.com/v1/datalab/shopping/category/keyword/age';
    const headers = {
      'Content-Type': 'application/json',
      'X-Naver-Client-Id': process.env.CLIENT_ID,
      'X-Naver-Client-Secret': process.env.CLIENT_SECRECT,
    };
    const result = await axios.post(url, request_body, {
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
