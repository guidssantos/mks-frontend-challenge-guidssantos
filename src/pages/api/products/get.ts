import { connectToDatabase } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from 'mongodb';

export default async function handleGet(req: NextApiRequest, res: NextApiResponse) {
    const { page = 1, limit = 10, sortby = 'createdAt', orderby = -1, name, id, category } = req.query;

    const options = {
        skip: (Number(page) - 1) * Number(limit),
        limit: Number(limit),
        sort: { [sortby as string]: orderby as any } 
    };

    const query: any = {};
    if (name) query.name = name;
    if (id) query._id = new ObjectId(id as string);
    if (category) query.category = category;

    try{
        const db = await connectToDatabase();
        const collection = db.collection('products');

        const data = await collection.find(query, options).toArray();

        res.status(200).json(data);
    } catch{
        res.status(500).json({message: 'Erro ao buscar dados.'})
    }
}
