const MongoClient = require('mongodb').MongoClient;

//connection credentials
const username = encodeURIComponent("em1GB");
const password = encodeURIComponent("2021Mobot");
const clusterUrl = "clustermobot.l9fgz.mongodb.net";
const authMechanism = "SCRAM-SHA-1";

//connection URI
const uri = `mongodb+srv://${username}:${password}@${clusterUrl}/?authMechanism=${authMechanism}`;
const client = new MongoClient(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});
//asynchronous function where we will connect to our MongoDB cluster
async function run(){

    try {
        await client.connect();
        await listDatabases(client);
        await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully to server");
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

run().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};