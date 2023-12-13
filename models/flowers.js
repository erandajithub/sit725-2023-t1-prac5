const { ObjectId } = require('mongodb');
let client = require('../dbConnection');
let collection = client.db().collection('Flowers');

function postCat(cat, callback) {
    collection.insertOne(cat, callback);
}

function getAllCats(callback) {
    collection.find({}).toArray(callback);
}

const deleteCatById = (catId, callback) => {
    const objectId = new ObjectId(catId);
    collection.deleteOne({ _id: objectId }, (err, result) => {
        if (!err) {
            callback(null, { statusCode: 200, data: result, message: 'success' });
        } else {
            callback(err); // Handle error case
        }
    });
};


module.exports = { postCat, getAllCats, deleteCatById };
