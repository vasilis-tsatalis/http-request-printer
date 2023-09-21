require('dotenv/config');
const qlogger = require('../functions/qlogger');

exports.to_create = async (req, res, next) => {
    try{

        await qlogger(req);

        //res.render("test1", { message: 'test message' });
        res.sendStatus(200)
    }catch(err){
        res.sendStatus(400).json({ message:err });
    }
  };