import { currentDateTime } from "@/utils/currentDateTime";
import { connectToDatabase } from "@/utils/db";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handlePut(req: NextApiRequest, res: NextApiResponse) {
            const {
                name,
                photo,
                description,
                price,
                category
            } = req.body;

            const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;
            
            if (typeof id !== 'string'){
                res.status(400).json({message: 'ID inválido.'});
                return;
            }

            try{
                const db = await connectToDatabase();
                const collection = db.collection('products');
                const findProduct = await collection.findOne({_id: new ObjectId(id)})
console.log(findProduct, 'findProduct')
                const data = {
                    name,
                    photo,
                    description,
                    price,
                    category,
                    updatedAt: currentDateTime(),
                    createdAt: findProduct?.createdAt
                }

                await collection.updateOne({_id: new ObjectId(id)}, {$set: data});
                
                res.status(200).json({message: 'Dados atualizados com sucesso!'});
            } catch{
                res.status(500).json({message: 'Erro ao enviar dados.'})
            }
}