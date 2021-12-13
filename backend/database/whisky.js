// ./src/database/ads.js
const { ObjectId } = require('mongodb');
const { getDatabase } = require('./mongo');

const collectionName = 'whisky';

async function getWhiskys() {
    const database = await getDatabase();
    return await database.collection(collectionName).find({}).toArray();
}

async function getWhiskyById(id) {
    const database = await getDatabase();
    return await database.collection(collectionName).findOne({_id: new ObjectId(id)});
}

async function getWhiskysByUserId(userId) {
    const database = await getDatabase();
    return await database.collection(collectionName).find({userId: userId}).toArray();
}

async function insertWhisky(whisky) {
    const database = await getDatabase();
    const { insertedId } = await database.collection(collectionName).insertOne(whisky);
    return insertedId;
}

async function deleteWhisky(id) {
    const database = await getDatabase();
    await database.collection(collectionName).deleteOne({
        _id: new ObjectId(id),
    });
}

async function updateWhisky(id, whisky) {
    const database = await getDatabase();
    await database.collection(collectionName).updateOne(
        { _id: new ObjectId(id), },
        {
            $set: {
                ...whisky,
            },
        },
    );
    return id;
}

module.exports = {
    insertWhisky,
    getWhiskyById,
    deleteWhisky,
    updateWhisky,
    getWhiskys,
    getWhiskysByUserId
};