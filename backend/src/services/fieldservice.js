const prisma = require('../models/prisma.client');

const createOne = async (data) => {
    return await prisma.FieldServiceData.create({ data });
}

const getAll = async () => {
    return await prisma.FieldServiceData.findMany();
}

const deleteOne = async (id) => {
    return await prisma.FieldServiceData.delete({ 
        where: {
            id: id
        }
     });
}

const updateOne = async(id, data) => {
    return await prisma.FieldServiceData.update({
        where: { id: id },
        data: data
    })
}

module.exports = { createOne, getAll, deleteOne, updateOne };