var express = require('express');
var router = express.Router();
var functionHelper = require('../functionHelper')

/* GET users listing. */
router.get('/',(req,res)=>{
  res.render('index')
});

router.get('/vote',(req,res)=>{
  res.render('vote')
});

router.get('/admin/results',(req,res)=>{
  res.render('results');
});

router.post('/',(req,res)=>{
  functionHelper.addOneVoter(req.body).then((response)=>{
    console.log(response);
    res.redirect('/')
  }).catch((err)=>{
    console.log(err);
  })
 
})

module.exports = router;
