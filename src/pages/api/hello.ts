// pages/api/hello.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '~/server/db';


export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  
  try {
    if (req.method === 'POST') {
      const { name } = req.body;
    
      const newUser = await db.user.create({
        data: {
          name: name,
        },
      });
    
      res.status(200).json(newUser);
    } else {
      const users = await db.user.findMany();
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }

}