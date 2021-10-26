const express = require('express');
const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

// app.use(express.urlencoded({ extended: true }));

// app.use(express.json());
app.use(express.text());

app.use(cors());
// Routes
app.use('/api', require('./routes'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
