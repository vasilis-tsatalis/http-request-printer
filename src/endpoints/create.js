require('dotenv/config');

exports.create = async (req, res, next) => {
    try{
        //res.render("test1", { message: 'test message' });
        res.sendStatus(200)
    }catch(err){
        res.sendStatus(400).json({ message:err });
    }
  };