// ./src/database/ads.js
const { ObjectId } = require('mongodb');
const {getDatabase} = require('./mongo');

const collectionName = 'user';

async function getUsers() {
  const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}

async function getUserById(id) {
  const database = await getDatabase();
  return await database.collection(collectionName).findOne({_id: new ObjectId(id)});
}

async function insertUser(user) {
  const database = await getDatabase();
  const {insertedId} = await database.collection(collectionName).insertOne(user);
  return insertedId;
}

async function deleteUser(id) {
    const database = await getDatabase();
    await database.collection(collectionName).deleteOne({
      _id: new ObjectId(id),
    });
}
  
async function updateUser(id, user) {
    const database = await getDatabase();
    await database.collection(collectionName).updateOne(
      { _id: new ObjectId(id), },
      {
        $set: {
          ...user,
        },
      },
    );
    return id;
}

module.exports = {
  insertUser,
  getUserById,
  deleteUser,
  updateUser,
  getUsers,
};