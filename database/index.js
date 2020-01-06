require('dotenv/config')

const mongoClient = require('mongodb').MongoClient,
      dbName = 'projetoNovo',
      options = {
          useNewUrlParser: true,
          useUnifiedTopology: true
      };

connect = async function(){
    const connection = await mongoClient.connect(process.env.MONGOURL, options);
    const dataBase = connection.db(dbName);
    
    return {
        connection: connection,
        dataBase: dataBase
    }
}

insertOne = async function(collection, data){
    let client = await connect();
    let result = await client.dataBase.collection(collection).insertOne(data)
    .then(result => {
        client.connection.close();
        return result;
    })
    .catch(error => {
        client.connection.close();
        console.log(error);
        return error;
    });

    return result;
}

findOne = async function(collection, data){
    let client = await connect();
    let result = await client.dataBase.collection(collection).findOne(data)
    .then(result => {
        client.connection.close();
        return result;
    })
    .catch(error => {
        client.connection.close();
        console.log(error);
        return error;
    });
    
    return result;
}

updateOne = async function(collection, filter, newData){
    let client = await connect();
    let set = {
        $set: newData
    }
    let result = await client.dataBase.collection(collection).updateOne(filter, set)
    .then(result => {
        client.connection.close();
        return result;
    })
    .catch(error => {
        client.connection.close();
        console.log(error);
        return error;
    });
    
    return result;
}

find = async function(collection, filter){
    let client = await connect();
    let result = await client.dataBase.collection(collection).find(filter).toArray()
    .then(result => {
        client.connection.close();
        return result;
    })
    .catch(error => {
        client.connection.close();
        console.log(error);
        return error;
    });

    return result;
}

module.exports = {insertOne, updateOne, find, findOne}