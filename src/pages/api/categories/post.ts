import { currentDateTime } from "@/utils/currentDateTime";
import { connectToDatabase } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handlePost(req: NextApiRequest, res: NextApiResponse) {
            const {
                name,
                photo
            } = req.body;

            try{
                const db = await connectToDatabase();
                const collection = db.collection('categories');

                const data = {
                    name,
                    photo,
                    createdAt: currentDateTime(),
                    updatedAt: currentDateTime(),
                }

                 await collection.insertOne(data);
                res.status(200).json({message: 'Dados enviados com sucesso!'});
            } catch{
                res.status(500).json({message: 'Erro ao enviar dados.'})
            }
}