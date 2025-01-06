const fieldservice = require('../services/fieldservice');

const create = async (req , res) => {
    try {
        const fieldserviceData = await fieldservice.createOne(req.body);
        res.status(201).json(fieldserviceData)
    } catch (error) {
        res.status(500).json({message: error.message})
        console.log('Error while create new data', error)
    }
}

const getAll = async (req, res) => {
    try {
        const fieldserviceData = await fieldservice.getAll();
        res.status(201).json(fieldserviceData)
    } catch (error) {
        res.status(500).json({message: error.message})
        console.log('Erorr while fetchign all data', error.message)
    }
}

const deleteOne = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const fieldserviceData = await fieldservice.deleteOne(id);
        res.status(201).json(fieldserviceData)
    } catch (error) {
        res.status(500).json({message: error.message})
        console.log('Error while deleting data', error)
    }
}

const updateOne = async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const fieldserviceData = await fieldservice.updateOne(id, req.body);
        res.status(201).json(fieldserviceData)
    } catch (error) {
        res.status(500).json({message: error.message})
        console.log('Error while deleting data', error)
    }
}

module.exports = { create, getAll, deleteOne, updateOne }