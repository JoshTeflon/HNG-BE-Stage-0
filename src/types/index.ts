interface IUser {
  name: string;
  email: string;
  stack: string;
}

export interface IProfileResponse {
  status: 'success' | 'error'; 
  user?: IUser;
  timestamp: string;
  fact: string;
  message?: string;      
};