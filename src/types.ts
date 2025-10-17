interface IUser {
  name: string;
  email: string;
  stack: string;
}

export interface ICatFactData {
  fact: string;
  length: number;
}

export interface IProfileResponse {
  status: 'success' | 'error'; 
  user?: IUser;
  timestamp: string;
  fact: string;
  message?: string;      
};