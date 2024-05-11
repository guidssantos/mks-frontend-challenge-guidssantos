import { NextApiRequest, NextApiResponse } from "next";
import handleGet from "./get";
import handlePost from "./post";
import handlePut from "./put";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method){
        case 'GET':
            return handleGet(req, res);
        
        case 'POST':
            return handlePost(req, res)

        case 'PUT':
            return handlePut(req, res)
        
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}