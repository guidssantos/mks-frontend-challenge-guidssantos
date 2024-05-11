import { MongoClient, Db } from "mongodb";

let db: Db | null = null;

export async function connectToDatabase(): Promise<Db> {
    if (db) {
        return db;
    }

    const uri = process.env.MONGODB_URI || '';
    const client = new MongoClient(uri, {
        serverApi:{
            version: '1',
            strict: true,
            deprecationErrors: true
        }
    });

    await client.connect();
    db = client.db('ecommerce');

    return db;
}
