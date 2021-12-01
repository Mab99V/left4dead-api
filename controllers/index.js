const models = require('../database/models');
const createInfectado = async (req,res)=>{
    try{
        const infectado = await models.infectado.create(req.body);
        return res.status(201).json({
            infectado
        });
    }catch (error){
        return res.status(500).json({
            error:error.message
        });
    }
};
const getAllInfectado = async (req, res)=>{
    console.log('getting infectado');
    try{
        const infectados = await models.infectado.findAll({
           include:[
	   ]
        });
        return res.status(200).json({infectados});
    } catch (error){
        return res.status(500).send(error.message);
    }
};
module.exports = {
    createInfectado,
    getAllInfectado
};
