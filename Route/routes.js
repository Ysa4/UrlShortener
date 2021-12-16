const express =require('express');
const router =express.Router();
const path = require('path');

const Controller =require('../Controller/controller');
const baseUrl ="http://localhost:5000";



router.get('/',(req,res,next)=>{
  res.sendFile(path.join(__dirname,'..','index.html'));
 });

 router.get('/:shortUrl', Controller.getShortUrl);
 router.post('/shorten',Controller.makeShortUrl);

 module.exports=router;