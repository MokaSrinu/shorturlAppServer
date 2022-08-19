const ShortUrl=require('../database/shorturl');

const handleurl=async (req,res)=>{
  const {fullurl}=req.body;

  const urldata=await ShortUrl.findOne({full:fullurl});
  if(!urldata){
    const data=await ShortUrl.create({full:fullurl});
    res.send(data);
  }else{
    res.send(urldata);
  }

  
}

const getAllUrls=async (req,res)=>{
    const data=await ShortUrl.find();
    res.status(200).send({"data":data});
}

const getFullByShort=async (req,res)=>{
   const {short}=req.body;

   const data=await ShortUrl.findOne({short:short});
   data.clicks++;
   data.save();
   res.send(data);
}

module.exports={
    handleurl,
    getFullByShort,
    getAllUrls
}
