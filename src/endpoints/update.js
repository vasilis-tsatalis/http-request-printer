require('dotenv/config');
const qlogger = require('../functions/qlogger');

exports.to_update = async (req, res, next) => {
    try{
        await qlogger(req);
        
        res.sendStatus(200)
    }catch(err){
        res.sendStatus(400).json({ message:err });
    }
  };