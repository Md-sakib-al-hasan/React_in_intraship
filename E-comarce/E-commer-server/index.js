const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 4000
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

//middle ware

app.use(cors())
app.use(express.json());




//mongbd CURD oparations
console.log()


const uri = `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@cluster0.wn8gk0s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect("");


        const ECommerce = client.db("E-commerce");
        const AllCollection = ECommerce.collection("Blog");
        const Banner = ECommerce.collection("Banner");

        app.get('/', async (req, res) => {
            const movie = await AllCollection.find().toArray();
            res.send(movie)

        })

        //banner calletions 

        app.get('/banner', async (req, res) => {
            const banner = await Banner.find().toArray();
            res.send(banner)
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);








app.listen(port, () => {
    console.log(`exmple app listening on port ${port}`)
})