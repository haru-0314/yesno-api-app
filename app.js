const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://yesno.wtf/api');
    const { answer, image } = response.data;

    res.send(`
      <h1>YesNo API Demo</h1>
      <p>答え: <strong>${answer}</strong></p>
      <img src="${image}" alt="${answer}" />
    `);
  } catch (error) {
    res.send('APIからの取得に失敗しました');
  }
});

app.listen(PORT, () => {
  console.log(`サーバー起動中: http://localhost:${PORT}`);
});

