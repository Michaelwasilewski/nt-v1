const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://KingaHelena:Natural123@cluster0.fr3d2uf.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
console.log("Starting script...");

async function run() {
  try {
    console.log("Trying to connect...");
    await client.connect();
    console.log("Connected. Now pinging...");
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    console.log("Closing the connection...");
    await client.close();
  }
}
run().catch(console.dir);