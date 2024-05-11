import { connectToDatabase } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handleGet(req: NextApiRequest, res: NextApiResponse) {
    try{
        const db = await connectToDatabase();
        const collection = db.collection('categories');

        const data = await collection.find({}).toArray();

        res.status(200).json(data);
    } catch{
        res.status(500).json({message: 'Erro ao buscar dados.'})
    } 
    
}