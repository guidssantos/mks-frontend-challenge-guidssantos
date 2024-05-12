import { connectToDatabase } from "@/utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import { ObjectId } from 'mongodb';

export default async function handleGet(req: NextApiRequest, res: NextApiResponse) {
    const {
      page = 1,
      limit = 8,
      sortBy = 'createdAt',
      orderBy = 1,
      name,
      id,
      categories
    }: any = req.query

    const options = {
        skip: (Number(page) - 1) * Number(limit),
        limit: Number(limit),
        sort: { [sortBy as string]: orderBy as any },
    };

    const query: any = {};
    if (name) query.name = new RegExp(name as string, 'i')
    if (id) query._id = new ObjectId(id as string);
     if (categories) {
       const categoryIds = categories
         .split(',')
         .map((cat: string) => new ObjectId(cat))
       query['category._id'] = { $in: categoryIds }
     }
     const {  db } = await connectToDatabase()
    try{
        const collection = db.collection('products');

        const data = await collection.find(query, options).toArray();

        res.status(200).json(data);
    } catch{
        res.status(500).json({message: 'Erro ao buscar dados.'})
    }
}
