const handleError = require('../error/errorHandler');
const DbStructure = require('../db/model/dbStructure');
const Validators = require('../db/model/Validators');
const Session = require('../db/model/Session');
const SessionController = require('./SessionController');
module.exports = {
    create: async (req, res) => {
        let data = req.body;
        console.log(data);
        if (req.method === 'POST') {
            req.body.createdAt = Date.now();
            const respd = await Validators.register(data);
            // const session = await SessionController.create(req.body.email, 'validators');
            return res.json(respd);
        }else{
            return handleError(req,res, true, 'Wrong request method', data)
        }
    },
    fetchAll: async ( req, res ) => {
        if(req.method === "GET"){
            const response = await Validators.getAll();
            return response;
        }else{
            return handleError(req,res, true, 'Wrong request method', data)
        }
    }
}
