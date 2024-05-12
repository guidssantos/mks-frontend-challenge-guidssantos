import { connectToDatabase } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handleGet(req: NextApiRequest, res: NextApiResponse) {
    const {  db } = await connectToDatabase()
    try {
      const collection = db.collection('categories')

      const data = await collection.find({}).toArray()

      res.status(200).json(data)
    } catch {
      res.status(500).json({ message: 'Erro ao buscar dados.' })
    }

}
