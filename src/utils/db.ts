import { MongoClient, Db } from 'mongodb'

interface DatabaseConnection {
  client: MongoClient
  db: Db
}

let dbConnection: DatabaseConnection | null = null

export async function connectToDatabase(): Promise<DatabaseConnection> {
  if (dbConnection) {
    return dbConnection
  }

  const uri = process.env.MONGODB_URI || ''
  const client = new MongoClient(uri, {
    serverApi: {
      version: '1',
      strict: true,
      deprecationErrors: true
    }
  })

  await client.connect()
  const db = client.db('ecommerce')

  dbConnection = { client, db }

  return dbConnection
}
