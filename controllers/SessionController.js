const handleError = require('../error/errorHandler');
const DbStructure = require('../db/model/dbStructure');
const Validators = require('../db/model/Validators');
const Sessions = require('../db/model/Session');



module.exports = {
    create: async (email, table) => {
        const sessions = await DbStructure.getTable('session');
        const index = sessions.map(v => {
            return v.email.toLowerCase() + ' : ' + v.table;
        }).indexOf(email.toLowerCase() + ' : ' + table);        
        if(index > 0){

        }else{
            const dB = await DbStructure.db();
            
            
        }
        return db
        // if (req.method === 'POST') {
        //     req.body.createdAt = Date.now();
        //     const respd = await Validators.register(req.body);
        //     return res.json(respd);
        // }else{
        //     return handleError(req,res, true, 'Wrong request method', data)
        // }
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
