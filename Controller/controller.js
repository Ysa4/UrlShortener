const validUrl =require('valid-url');
const shortId =require('shortid');
const Url =require('../Model/Url');
module.exports.getShortUrl = async (req,res,next)=>{
    try{
        let url = await Url.findOne({urlCode:req.params.shortUrl});
     
           if(url)
           {
               res.redirect(url.longUrl);
           }else{
            res.status(404).json('No Url Found');
           }
     }
     catch(err)
     {
         console.error(err);
         res.status(500).json('Server error');
     }
 };

 module.exports.makeShortUrl = async (req,res,next)=>{
    const userurl =req.body.url;
    
    const shorturlcode=shortId.generate();
    if(validUrl.isUri(userurl))
    {
       try{
          let url = await Url.findOne({userurl});
       
             if(url)
             {
                 res.json(url);
             }else{
              
                 const shorturl = baseUrl+'/'+ shorturlcode;
                 const result = await new Url({urlCode:shorturlcode,longUrl:userurl,shortUrl:shorturl,date:new Date()}).save();
             
                 res.json(result);
             }
       }
       catch(err)
       {
           console.error(err);
           res.status(500).json('Server error');
       }
    }
    else
    {
       res.status(401).json('Invalid Url');
    }
};