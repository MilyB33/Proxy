const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/*', async (req, res) => {
  const options = {
    headers: {
      'client-id': req.headers['client-id'],
      authorization: req.headers['authorization'],
    },
  };

  const url = req.params['0'];

  try {
    const apiRes = await axios.post(url, req.body, options);

    const data = JSON.stringify(apiRes.data);

    console.log(req.body);

    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
