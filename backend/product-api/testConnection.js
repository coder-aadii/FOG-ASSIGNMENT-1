const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://adityaaerpule191996:Asdf1234@fog-cluster.x015l.mongodb.net/';

async function testConnection() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB");
    } catch (err) {
        console.error("Connection failed", err);
    } finally {
        await client.close();
    }
}

testConnection();
