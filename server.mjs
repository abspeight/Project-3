import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 5005;

app.use(cors());

app.get('/api/random-numbers', async (req, res) => {
  try {
    const response = await fetch('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=250&count=3');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
