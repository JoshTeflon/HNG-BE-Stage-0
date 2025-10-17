import { Request, Response } from 'express';

import { getCatFact  } from '../api/fetchCatFact';
import { IProfileResponse } from '../types';

export const getProfile = async (req: Request, res: Response) => {
  try {
    const catFact = await getCatFact();

    const response: IProfileResponse = {
      status: 'success',
      user: {
        name: process.env.USER_NAME ?? '',
        email: process.env.USER_EMAIL ?? '',
        stack: process.env.USER_STACK ?? '',
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    };

    res.status(200).json(response);
  } catch (error: unknown) {
    console.error('Error getting cat fact:', error);
    
    res.status(500).json({
      status: 'error',
      message: 'Could not get cat fact.'
    })
  }
};

