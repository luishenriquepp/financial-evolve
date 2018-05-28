var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:1234@ds153392.mlab.com:53392/financial-evolve'); // requires setup mlab

router.post('/fixedexpense', (req, res, next) => {
    const path = '2018.0.expenses.fixedexpense.market';
    var expense = req.body;

    db.budgets.update({user: 'admin'}, {$set: {path: expense.value}}, function(err, data){
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});

router.get('/fixedexpense', (req, res, next) => {
    const path = '2018.0.expenses.fixedexpense.market';
    var expense = req.body;
});

module.exports = router;