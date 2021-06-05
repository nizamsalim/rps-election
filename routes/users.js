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

router.get('/admin',(req,res)=>{
  res.render('admin-login');
});

router.get('/admin/rtfliumhglimshjcdordhlewiorltyvguorlfig',(req,res)=>{
  functionHelper.getResults().then((list)=>{
    let captains = list[0];
    let asstcaptains = list[1];
    let sportscaptains = list[2];
    // console.log(captains,asstcaptains,sportscaptains);
    res.render('results',{captains,asstcaptains,sportscaptains})
  })
  // res.render('results')
})

router.post('/',(req,res)=>{
  functionHelper.addOneVoter(req.body).then((response)=>{
    // console.log(response);
    res.redirect('/')
  }).catch((err)=>{
    console.log(err);
  })
 
});



router.post('/admin-login',(req,res)=>{
  // console.log(req.body);
  let loginStatus = functionHelper.adminLogin(req.body);
  if(loginStatus){
    res.redirect('/admin/rtfliumhglimshjcdordhlewiorltyvguorlfig')
  }else{
    res.redirect('/admin')
  }
})

module.exports = router;
