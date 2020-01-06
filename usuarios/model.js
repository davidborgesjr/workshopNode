const mongoClient = require('./../database/index'),
      collection = 'usuarios';

const criar = async (data) => {

    return await mongoClient.insertOne(collection, data);        
}

const alterar = async (filter, data) => {

    return await mongoClient.updateOne(collection, filter, data);
}

const listar = async () => {

    return await mongoClient.find(collection, {})
}

const buscar = async (filter) => {

    return await mongoClient.findOne(collection, filter);
}

module.exports = {criar, alterar, listar, buscar};