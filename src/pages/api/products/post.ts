import { currentDateTime } from "@/utils/currentDateTime";
import { connectToDatabase } from "@/utils/db";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handlePost(req: NextApiRequest, res: NextApiResponse) {

            const {
                name,
                photo,
                description,
                price,
                category
            } = req.body;

            try{
                const db = await connectToDatabase();
                const collection = db.collection('products');
                const categoriesCollection = db.collection('categories')

                const findCategory = await categoriesCollection.findOne({_id: new ObjectId(category.id)})
                const data = {
                    name,
                    photo,
                    price,
                    description,
                    category:{
                        ...findCategory
                    },
                    createdAt: currentDateTime(),
                    updatedAt: currentDateTime(),
                }

                const result = await collection.insertOne(data);
                res.status(200).json(data);
            } catch{
                res.status(500).json({message: 'Erro ao enviar dados.'})
            }
}