const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/submitForm', (req, res) => {
  console.log('Form Data:', req.body);
  // Here you can process the form data as per your requirement
  // For example, you can save it to a database
  res.status(200).json({ message: 'Form submitted successfully' });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
