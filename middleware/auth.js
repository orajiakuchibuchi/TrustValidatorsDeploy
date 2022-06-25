const handleError = require('../error/errorHandler');
const ACCEPTED_DOMAINS = ['http://localhost:3000',
                          'http://localhost:5000',
                          'https://trust-fund-mu.vercel.app',
                          'https://trustvalidators.herokuapp.com',
                          'http://localhost:5001',
                          'http://localhost:5001',
                          'http://localhost:5002',
                          'http://localhost:5003',
                          'https://localhost:4200'];
                          

module.exports = (req, res, next) => {
    const origin = req.get('origin');
    if(ACCEPTED_DOMAINS.includes(origin)){
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.header('Access-Control-Allow-Methods', '*');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      res.header('Access-Control-Allow-Credentials', true);
      next();
    }else{
      return handleError(req,res, true, 'Unknown Origin. Not Permitted '+origin);
    }

}
