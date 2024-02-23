import { MongoClient } from 'mongodb';

const URI = `mongodb+srv://goldiamCrafter:eoRdlbFXXNTW4K2U@cluster0.byqa1ef.mongodb.net/?retryWrites=true&w=majority`
const options = { useNewUrlParser: true, useUnifiedTopology: true }

if(!URI) throw new Error(`Please add your Mongo URI to .env.local`)

let client = new MongoClient(URI, options)
let clientPromise

const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db('goldiam-crafters-database');
       // return client.db('sample_analytics');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

export { connectToDatabase };
