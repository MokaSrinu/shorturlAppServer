const express = require('express');
const { handleurl, getFullByShort, getAllUrls } = require('../handlers/shorturl');


const shorturlRouter = express.Router()

shorturlRouter.post('/shortUrls', handleurl);
shorturlRouter.post('/getfullbyshort', getFullByShort);
shorturlRouter.get('/getallurls', getAllUrls);



module.exports = shorturlRouter;