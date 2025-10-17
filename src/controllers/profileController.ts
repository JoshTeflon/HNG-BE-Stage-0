import { Request, Response } from 'express';

import { getCatFact  } from '../api/fetchCatFact';
import { IProfileResponse } from '../types';

export const getProfile = async (req: Request, res: Response) => {  
  const catFact = await getCatFact();

  const name = process.env.USER_NAME ?? 'Full Name Missing';
  const email = process.env.USER_EMAIL ?? 'email@example.com';
  const stack = process.env.USER_STACK ?? 'Node.js/Express (Config Missing)';

  const response: IProfileResponse = {
    status: 'success',
    user: {
      name,
      email,
      stack,
    },
    timestamp: new Date().toISOString(),
    fact: catFact,
  };

  res.status(200).json(response);
};