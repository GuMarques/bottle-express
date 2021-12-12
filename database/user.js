// ./src/database/ads.js
const {getDatabase} = require('./mongo');

const collectionName = 'user';

async function insertUser(user) {
  const database = await getDatabase();
  const {insertedId} = await database.collection(collectionName).insertOne(user);
  return insertedId;
}

async function getUser() {
  const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}

async function deleteUser(id) {
    const database = await getDatabase();
    await database.collection(collectionName).deleteOne({
      _id: new ObjectID(id),
    });
}
  
async function updateAd(id, ad) {
    const database = await getDatabase();
    delete ad._id;
    await database.collection(collectionName).update(
      { _id: new ObjectID(id), },
      {
        $set: {
          ...ad,
        },
      },
    );
}

module.exports = {
  insertUser,
  getUser,
  deleteUser,
  updateAd,
};