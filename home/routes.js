const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    res.send({mensagem: 'tudo certo com a home'});
});

module.exports = router